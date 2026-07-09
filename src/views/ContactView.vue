<script lang="ts" setup>
const contact = {
  phone: '+1 (623) 853-7028',
  email: 'catherine.luse@gmail.com',
  linkedin: 'https://www.linkedin.com/in/catherine-luse-a306911a8/',
  githubWork: 'https://github.com/catherineluse',
  githubPersonal: 'https://github.com/gennitdev'
}

const repos = [
  {
    label: 'Multiforum Frontend GitHub Repository',
    url: 'https://github.com/gennit-project/multiforum-nuxt'
  },
  {
    label: 'Multiforum Backend GitHub Repository',
    url: 'https://github.com/gennit-project/multiforum-backend'
  }
]
</script>

<template>
  <div class="px-6 py-8">
    <div class="mb-10 border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-800">Contact</h1>
      <p class="mt-1 text-gray-500">How to reach me and where to find my code.</p>
    </div>

    <ul class="flex flex-col gap-4 text-gray-600">
      <li v-if="contact.phone" class="flex items-center gap-3">
        <v-icon name="px-device-phone" size="24" />
        <span>{{ contact.phone }}</span>
      </li>
      <li v-if="contact.email" class="flex items-center gap-3">
        <v-icon name="px-mail" size="24" />
        <a class="underline hover:text-gray-800" :href="'mailto:' + contact.email">
          {{ contact.email }}
        </a>
      </li>
      <li v-if="contact.linkedin" class="flex items-center gap-3">
        <a
          class="underline hover:text-gray-800"
          :href="contact.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile <v-icon name="px-external-link" size="16" />
        </a>
      </li>
      <li v-if="contact.githubWork" class="flex items-center gap-3">
        <a
          class="underline hover:text-gray-800"
          :href="contact.githubWork"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile (Work) <v-icon name="px-external-link" size="16" />
        </a>
      </li>
      <li v-if="contact.githubPersonal" class="flex flex-col gap-2">
        <a
          class="underline hover:text-gray-800"
          :href="contact.githubPersonal"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile (Side Project) <v-icon name="px-external-link" size="16" />
        </a>
        <ul class="ml-6 flex list-disc flex-col gap-1">
          <li v-for="repo in repos" :key="repo.url" class="underline hover:text-gray-800">
            <a :href="repo.url" target="_blank" rel="noopener noreferrer">
              {{ repo.label }} <v-icon name="px-external-link" size="16" />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
