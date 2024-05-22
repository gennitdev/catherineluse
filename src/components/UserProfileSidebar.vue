<script lang="ts">
import { defineComponent } from 'vue'
import MarkdownPreview from './MarkdownPreview.vue'

export default defineComponent({
  name: 'UserProfileSidebar',
  components: {
    MarkdownPreview
  },
  setup() {
    return {
      profile: {
        name: 'Catherine Luse',
        profilePicURL: '/images/square-headshot-medium-size.jpeg',
        intro:
          'I am a frontend software engineer. I love to write about technology, software development, and my experiences in the tech industry.'
      }
    }
  }
})
</script>

<template>
  <div class="sticky top-0 max-h-screen overflow-auto rounded-lg pt-6 border">
    <div class="mb-4 mt-6 flex flex-col items-center gap-2">
      <div class="h-16 w-16 overflow-hidden rounded-full border">
        <img
          :src="profile.profilePicURL"
          :alt="'Picture of Catherine Luse'"
          class="h-full w-full object-cover"
        />
      </div>

      <h1
        v-if="profile?.name"
        class="mb-2 mt-4 flex border-gray-700 text-xl font-bold leading-6 text-gray-500 dark:text-gray-200"
      >
        {{ profile.name }}
      </h1>

      <div>
        <div class="-ml-8 w-full">
          <MarkdownPreview
            v-if="profile.intro"
            :key="profile.intro"
            :text="profile.intro"
            :word-limit="1000"
          />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
