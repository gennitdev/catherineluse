---
title: Real-Time Notifications with Neo4j GraphQL
createdAt: '2025-07-28T08:04:39.315Z'
---

I recently built a notification system using Neo4j's GraphQL library and Change Data Capture. It turned out way cleaner than expected, so sharing what I learned.

## The Problem

Users want instant notifications when someone comments on their posts. My first approach was handling notifications directly in the API handler. There were some downsides to this approach:

- Slow API responses waiting for notification processing
- Brittle - email failures broke comment creation
- Messy coupling of business and notification logic

## The Solution

Neo4j's GraphQL subscriptions with Change Data Capture. Instead of blocking the API, let the database emit events and handle notifications separately.

## How It Works

### Schema Setup

```typescript
extend schema @subscription

type Notification {
  id: ID! @id
  createdAt: DateTime! @timestamp(operations: [CREATE])
  read: Boolean
  text: String
}

type User {
  Notifications: [Notification!]! @relationship(type: "HAS_NOTIFICATION", direction: OUT)
}

type DiscussionChannel {
  SubscribedToNotifications: [User!]!
    @relationship(type: "SUBSCRIBED_TO_NOTIFICATIONS", direction: IN)
}
```

### Event Processing

```typescript
private async processCommentNotification(commentId: string) {
  const fullComment = await CommentModel.find({
    where: { id: commentId },
    selectionSet: `{
      id text
      DiscussionChannel { SubscribedToNotifications { username } Discussion { title } }
      Event { SubscribedToNotifications { username } title }
      ParentComment { SubscribedToNotifications { username } }
    }`
  });

  // Generate appropriate email content
  let emailContent;
  if (fullComment.DiscussionChannel) {
    emailContent = createCommentNotificationEmail(
      fullComment.text, fullComment.DiscussionChannel.Discussion.title,
      commenterUsername, channelName, discussionId, commentId
    );
    await this.processDiscussionCommentNotification(fullComment, emailContent);
  } else if (fullComment.Event) {
    emailContent = createEventCommentNotificationEmail(
      fullComment.text, fullComment.Event.title,
      commenterUsername, channelName, eventId, commentId
    );
    await this.processEventCommentNotification(fullComment, emailContent);
  } else if (fullComment.ParentComment) {
    emailContent = createCommentReplyNotificationEmail(
      fullComment.text, contentTitle, commenterUsername, contentUrl
    );
    await this.processCommentReplyNotification(fullComment, emailContent);
  }
}
```

### Bulk Notifications + Email

The system handles both in-app notifications and emails in a single batch operation:

```typescript
private async createBatchNotifications(entityType, entityId, notificationText, commenterUsername, emailContent?) {
  // 1. Get subscribers with email addresses
  const entity = await EntityModel.find({
    where: { id: entityId },
    selectionSet: `{
      SubscribedToNotifications {
        username
        Email { address }
      }
    }`
  });

  const usersToNotify = entity.SubscribedToNotifications
    .filter(user => user.username !== commenterUsername);

  // 2. Send batch emails first
  if (emailContent) {
    await this.sendBatchEmails(usersToNotify, emailContent);
  }

  // 3. Create in-app notifications
  const cypherQuery = `
    MATCH (entity:${entityType} {id: $entityId})
    MATCH (entity)<-[:SUBSCRIBED_TO_NOTIFICATIONS]-(user:User)
    WHERE user.username <> $commenterUsername
    CREATE (notification:Notification {
      id: randomUUID(),
      createdAt: datetime(),
      read: false,
      text: $notificationText
    })
    CREATE (user)-[:HAS_NOTIFICATION]->(notification)
  `;

  await session.run(cypherQuery, { entityId, commenterUsername, notificationText });
}

private async sendBatchEmails(usersToNotify, emailContent) {
  try {
    const emailsToSend = usersToNotify
      .filter(user => user.email)
      .map(user => ({
        to: user.email,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: emailContent.subject,
        text: emailContent.plainText,
        html: emailContent.html
      }));

    await sgMail.send(emailsToSend);
  } catch (error) {
    console.error('Email sending failed:', error);
    // Continue with in-app notifications even if emails fail
  }
}
```

## Why This Works

Your APIs stay fast because notifications happen asynchronously in the background. Bulk operations make it efficient because creating 100 notifications takes about the same time as creating one.

CDC guarantees you won't lose events since they're captured at the database level. If email sending fails, in-app notifications still work because they're handled separately.

The architecture stays clean with notification logic isolated in its own service. TypeScript provides type safety, and each component can be tested independently.

**The Complete Flow**

1. **Comment created** → Neo4j CDC automatically triggers a `commentCreated` event when someone adds a comment
2. **Event received** → The notification service receives this event, fetches the comment details, and generates the appropriate email content
3. **Batch processing** → The system processes everything in batches, using a single operation to send emails and create in-app notifications simultaneously
4. **Graceful failures** → When email problems occur, they don't affect the in-app notifications because these are handled as separate operations

The key advantage is batching - one SendGrid API call can notify hundreds of users at once, and email failures stay isolated from your core notification system.
