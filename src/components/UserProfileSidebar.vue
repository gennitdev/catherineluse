<script lang="ts">
import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'UserProfileSidebar',

  setup() {
    const { smAndDown } = useDisplay()
    return {
      navItems: {
        blogPosts: 'Blog Posts',
        contact: 'Contact'
      },
      profile: {
        name: 'Catherine Luse',
        profilePicURL: '/images/square-headshot-medium-size.png',
        intro: `Welcome to my personal website! I am a fullstack software engineer with a frontend focus. I am a lifelong learner and passionate about writing software that helps people, especially in the area of humane technology.`,
        contact: {
          phone: '+1 (623) 853-7028',
          email: 'catherine.luse@gmail.com',
          githubWork: 'https://github.com/catherineluse',
          githubPersonal: 'https://github.com/gennitdev',
          linkedin: 'https://www.linkedin.com/in/catherine-luse-a306911a8/',
          location: 'Phoenix, AZ'
        }
      },
      resumeUrl: '/CatherineLuseResumeNovember.pdf',
      smAndDown
    }
  }
})
</script>

<template>
  <div
    class="sticky top-0 rounded-lg px-8 py-12"
    :class="[!smAndDown ? 'max-h-screen' : '']"
  >
    <div class="mb-4 flex flex-col gap-2">
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

      <p v-if="profile?.contact.location" class="text-gray-400 text-sm">
        <v-icon name="px-pin" /> {{ profile.contact.location }}
      </p>

      <div class="flex flex-col gap-4">
        <h2 class="text-lg font-bold text-gray-400">About</h2>
        <p v-if="profile?.intro" class="text-gray-400 text-sm">{{ profile.intro }}</p>
        <h2 class="text-lg font-bold text-gray-400">Contact</h2>
        <ul class="text-gray-400 text-sm flex flex-col gap-1">
          <li v-if="profile.contact.phone" class="flex items -center gap-2">
            <v-icon name="px-device-phone" size="24" />
            <span>{{ profile.contact.phone }}</span>
          </li>
          <li v-if="profile.contact.email" class="flex items -center gap-2">
            <v-icon name="px-mail" size="24" />
            <a class="underline" :href="'mailto:' + profile.contact.email">{{
              profile.contact.email
            }}</a>
          </li>
          <li v-if="profile.contact.linkedin" class="flex items -center gap-2">
            <a
              class="underline"
              :href="profile.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn Profile <v-icon name="px-external-link" size="16"
            /></a>
          </li>
          <li v-if="profile.contact.githubWork" class="flex items -center gap-2">
            <a
              class="underline"
              :href="profile.contact.githubWork"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub Profile (Work) <v-icon name="px-external-link" size="16" />
            </a>
          </li>
          <li v-if="profile.contact.githubPersonal">
            <div class="flex items -center gap-2">
              <a
                class="underline"
                :href="profile.contact.githubPersonal"
                target="_blank"
                rel="noopener noreferrer"
                >GitHub Profile (Side Project) <v-icon name="px-external-link" size="16" />
              </a>
            </div>
            <ul class="list-disc ml-6">
              <li class="underline">
                <a
                  href="https://github.com/gennitdev/multiforum-nuxt"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Multiforum Frontend GitHub Repository
                  <v-icon name="px-external-link" size="16" />
                </a>
              </li>
              <li class="underline">
                <a
                  href="https://github.com/gennit-project/multiforum-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Multiforum Backend GitHub Repository
                  <v-icon name="px-external-link" size="16" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a :href="resumeUrl" download="CatherineLuseResume.pdf">
              <button>
                <v-icon name="px-download" size="24" />
                Download Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
