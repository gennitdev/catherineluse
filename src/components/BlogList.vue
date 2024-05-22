<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'
import UserProfileSidebar from './UserProfileSidebar.vue'

export default defineComponent({
  components: {
    UserProfileSidebar
  },
  setup() {
    const route = useRoute()
    const profile = {
      profilePicURL: '/posts/sample-post/square-headshot-medium-size.jpeg',
      displayName: 'Catherine Luse'
    }

    const { smAndDown } = useDisplay()

    return {
      relativeTime,
      route,
      smAndDown,
      profile,
      posts: [{ title: 'Sample Post', slug: 'sample-post' }],
      theme: 'dark'
    }
  }
})
</script>

<template>
  <div class="dark:bg-black border">
    <div
      v-if="smAndDown"
      :class="[theme === 'dark' ? 'channel-background-dark' : 'channel-background']"
      class="h-24 w-full object-cover lg:h-28"
      alt="background pattern"
    />
    <div v-if="smAndDown" class="flex flex-col justify-center">
      <div class="mb-4 h-24 w-24 shadow-sm border">
        <!-- <Avatar
          :text="profile.displayName"
          :src="profile.profilePicURL"
          :is-square="false"
          :is-medium="true"
        /> -->
      </div>

      <div class="mb-6">
        <div v-if="profile?.displayName">
          {{ profile.displayName }}
        </div>
      </div>
    </div>
    <div class="dark:bg-gray-950 border">
      <article class="relative z-0 flex-1 focus:outline-none xl:order-last">
        <v-container fluid class="p-0">
          <v-row class="flex flex-row gap-3">
            <v-col v-if="!smAndDown" cols="3" class="p-0">
              <UserProfileSidebar />
            </v-col>
            <v-col
              :class="[!smAndDown ? 'pt-6' : '']"
              :cols="!smAndDown ? 8 : 12"
              class="rounded-lg bg-gray-100 dark:bg-gray-900"
            >
              <h1>Blog Posts</h1>
              <ul>
                <li v-for="post in posts" :key="post.slug">
                  <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">
                    {{ post.title }}
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </article>
    </div>
  </div>
</template>
<style>
#channelAvatar {
  background-color: #4474c0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23efefef' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.channel-background {
  background-color: #faf9fc;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23000000' fill-opacity='0.08'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.channel-background-dark {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23f9f9fb' fill-opacity='0.34'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
