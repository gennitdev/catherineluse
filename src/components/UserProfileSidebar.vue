<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserProfileSidebar',

  setup() {
    return {
      navItems: {
        blogPosts: 'Blog Posts',
        contact: 'Contact'
      },
      profile: {
        name: 'Catherine Luse',
        profilePicURL: '/posts/sample-post/square-headshot-medium-size.jpeg',
        intro: `Welcome to my personal website! I am a frontend software engineer. I love to write about technology, software development, and my experiences in the tech industry.`,
        contact: {
          phone: '+1 (555) 123-4567',
          email: 'catherine.luse@example.com',
          githubWork: 'https://github.com/catherineluse',
          githubPersonal: 'https://github.com/gennitdev',
          linkedin: 'https://www.linkedin.com/in/catherineluse/'
        }
      }
    }
  }
})
</script>

<template>
  <div class="sticky top-0 max-h-screen overflow-auto rounded-lg px-8 py-12">
    <div class="mb-4 mt-6 flex flex-col items-center gap-2">
      <div class="overflow-hidden border" style="height: 100px; width: 100px; border-radius: 50%">
        <img
          :src="profile.profilePicURL"
          :alt="'Picture of Catherine Luse'"
          class="object-cover"
          style="height: 100%; width: 100%; border-radius: 50%"
        />
      </div>

      <h1 v-if="profile?.name" class="mb-2 mt-4 flex text-2xl font-bold leading-6 text-gray-400">
        {{ profile.name }}
      </h1>

      <div class="mt-4 flex flex-col gap-4">
        <h2 class="text-lg font-bold text-gray-400">About</h2>
        <p v-if="profile?.intro" class="text-gray-400 text-sm">{{ profile.intro }}</p>
        <h2 class="text-lg font-bold text-gray-400">Contact</h2>
        <ul class="text-gray-400 text-sm flex flex-col gap-1">
          <li v-if="profile.contact.phone" class="flex items -center gap-2">
            <v-icon name="co-phone" size="24" />
            <span>{{ profile.contact.phone }}</span>
          </li>
          <li v-if="profile.contact.email" class="flex items -center gap-2">
            <v-icon name="co-envelope-closed" size="24" />
            <span>{{ profile.contact.email }}</span>
          </li>
          <li v-if="profile.contact.githubWork" class="flex items -center gap-2">
            <a :href="profile.contact.githubWork" target="_blank" rel="noopener noreferrer"
              >GitHub Profile (Work) <v-icon name="co-external-link" size="16" />
            </a>
          </li>
          <li v-if="profile.contact.githubPersonal" class="flex items -center gap-2">
            <a :href="profile.contact.githubPersonal" target="_blank" rel="noopener noreferrer"
              >GitHub Profile (Personal) <v-icon name="co-external-link" size="16" />
            </a>
          </li>
          <li v-if="profile.contact.linkedin" class="flex items -center gap-2">
            <a :href="profile.contact.linkedin" target="_blank" rel="noopener noreferrer"
              >LinkedIn Profile <v-icon name="co-external-link" size="16"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
