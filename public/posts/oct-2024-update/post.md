---
title: Multiforum - October Update
createdAt: "2024-10-30T05:19:10.220Z"
---


I decided to migrate Multiforum from Vue to Nuxt so that I could learn more about server-side rendering while also making it easier to take advantage of the SEO features of Nuxt down the road. The migration took most of October but it's nearly done.

I took a break from the migration at some points to improve the UI. There are enhancements to the layout for event search and for filtering by forums.

Here's the new event search layout with the filters on top instead of on the left:

![Event search with centered filters](/posts/oct-2024-update/event-search-after.png)

I like this arrangement more as it looks more symmetrical, so it's more aesthetically pleasing and has better glanceability; I think this makes it easier to understand the search and filtering functionality at first glance. Putting the forum picker on the left of the search bar helps it become more prominent, which is important because on this platform, everything is organized into forums.

I also improved the forum picker. Before, you couldn't search it and if there were many forums in the platforms, it looked too disorganized and huge. Here's what it looked like before:

![Filtering map by multiple forums](/posts/events/filtering-map-by-multiple-forums.png)

The new version lets you search the forum picker to filter down the options and select one or multiple forums with check boxes:

![Forum picker after](/posts/oct-2024-update/forum-picker-after.png)


As soon as I finish the Nuxt migration these changes will be live.