---
title: About Multiforum
createdAt: "2024-08-03T02:30:36.714Z"
---

This is a work in progress that intended to be an open-source, self-hosted platform that lets you host multiple forums.

Each forum has two sections, a discussion section and a calendar. In the discussion section, content
can be upvoted so that the best content rises to the top. In the event section, anyone can post
an event that participants in the community may be interested in.

Events can be submitted to multiple forums to increase visibility of them and
help promote them. The same can be done with text-based discussion posts.

To solve the problem where you're bored on the weekend but you don't know what to do in your area, events can be searched across multiple forums based on location, tags and keyword. Screenshots are below.

When the project is finished, I will add documentation so that anyone can deploy their own Multiforum with custom branding.

## Technology Stack

On the backend (<https://github.com/gennit-project/multiforum-backend>), an Apollo server fetches data from the database (a graph database, Neo4j). Some resolvers are auto-generated using the [Neo4j graphql library](https://neo4j.com/docs/graphql/current/), while more complex resolvers are implemented using a combination of the [OGM](https://neo4j.com/docs/graphql/current/ogm/) and custom Cypher queries.

The frontend is a Vue application that makes GraphQL queries to the Apollo server.
