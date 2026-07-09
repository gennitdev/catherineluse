<script lang="ts">
import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify'
import NavMenu from './NavMenu.vue'

export default defineComponent({
  name: 'UserProfileSidebar',
  components: {
    NavMenu
  },

  setup() {
    const { smAndDown } = useDisplay()
    return {
      profile: {
        name: 'Catherine Luse',
        profilePicURL: '/images/square-headshot-medium-size.png',
        location: 'Phoenix, AZ',
        intro: `Welcome to my personal website! I am a fullstack software engineer with a frontend focus. I am a lifelong learner and passionate about writing software that helps people, especially in the area of humane technology.`
      },
      smAndDown
    }
  }
})
</script>

<template>
  <div class="sticky top-0 rounded-lg px-8 py-12" :class="[!smAndDown ? 'max-h-screen overflow-y-auto' : '']">
    <div class="mb-8 flex flex-col gap-2">
      <div class="border" style="height: 125px; width: 125px; border-radius: 50%">
        <img
          :src="profile.profilePicURL"
          :alt="'Picture of Catherine Luse'"
          class="object-cover"
          style="height: 100%; width: 100%; border-radius: 50%"
        />
      </div>

      <h1 v-if="profile?.name" class="mt-4 flex text-2xl font-bold text-gray-400">
        {{ profile.name }}
      </h1>

      <p v-if="profile?.location" class="text-gray-400 text-sm">
        <v-icon name="px-pin" /> {{ profile.location }}
      </p>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg font-bold text-gray-400">About</h2>
        <p v-if="profile?.intro" class="text-gray-400 text-sm">{{ profile.intro }}</p>
      </div>
    </div>

    <NavMenu />
  </div>
</template>
