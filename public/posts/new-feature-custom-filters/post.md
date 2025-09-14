---
title: New feature September 2025 - Downloads and custom filters for each forum
createdAt: '2025-09-13'
---

Although these features are still in progress, I wanted to share a status update about what I've been working on recently because I am pleased with the progress so far.

I've been picturing this platform as a place that sparks creativity. Forums will have files available to download in a niche subject matter area, such as ebooks or video game mods - and right next to that, in the same forum, will be a wiki in which super-beginners can learn the technical details on how to get started making such creations themselves. Ideally, in the future, Multiforum will inspire people not just to be consumers of creative works, but to provide active financial support to creators and learn how to be creators themselves.

But allowing a bunch of files to be shared on this platform has created the need for additional features to be added for navigation, organization and security. For this blog post, the feature I want to focus on is the newly added ability to add forum-specific filters for downloads.

In this example forum, `sims4_builds`, you can see how there are several lots that can be downloaded there. In the Sims 4, the most common lot type is `Residential`. You can see how this forum has specific filters to allow users to find the kind of lots they are looking for:

![download_list_with_filters_in_side_bar.png](/posts/new-feature-custom-filters/download_list_with_filters_in_side_bar.png)

If you apply a filter such as 'Residential' in the left side bar, the results are filtered in-place, and the commercial lots disappear:

![one_active_filter.png](/posts/new-feature-custom-filters/one_active_filter.png)

If you apply two filters, the results are filtered further. In this case we are looking at only residential lots of size 20 by 20:

![two_active_filters.png](/posts/new-feature-custom-filters/two_active_filters.png)

These filters correspond to labels that can be seen on the download detail page. In this case, we can see the lot size and lot type in the sidebar on the right:

![labels_on_detail_page.png](/posts/new-feature-custom-filters/labels_on_detail_page.png)

You might be thinking, those filters are oddly specific to a more general platform like Multiforum. That's because they are configured at the individual forum scope, and you can edit the available filters in the settings. At the moment, the form is kind of dense; I'm thinking of how to make it more streamlined, but here it is:

![filter_group_form1.png](/posts/new-feature-custom-filters/filter_group_form1.png)

Another look at the editable filters:

![filter_group_form2.png](/posts/new-feature-custom-filters/filter_group_form2.png)

Currently, the labels have to be applied to individual downloads manually, by filling out a form. I think that is not ideal because it can be laborious or tiresome to manually label things, especially if you don't know off the top of your head what type of lot you have, or other details like that. That is why I am currently working on an auto-labeler - something that is enabled by an admin and configured at the forum scope, which will automatically apply forum specific labels to allow the results to be filtered properly. More on that next.
