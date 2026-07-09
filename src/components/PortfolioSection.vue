<script lang="ts" setup>
import type { PropType } from 'vue'
import type { PortfolioSection } from '@/data/portfolio'
import PhotoAlbum from '@/components/PhotoAlbum.vue'

// The inner content of one portfolio entry (title, org, period, body,
// tech chips, links, and photo album). Reused by both the Work timeline
// and the Fun stacked layout.
defineProps({
  section: {
    type: Object as PropType<PortfolioSection>,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-bold text-gray-800">{{ section.title }}</h2>
      <p v-if="section.org" class="!m-0 text-lg text-gray-600">{{ section.org }}</p>
      <p v-if="section.period" class="!m-0 text-sm text-gray-400">
        {{ section.period }}
      </p>
    </div>

    <div class="mt-3 flex flex-col gap-3">
      <p
        v-for="(paragraph, idx) in section.body"
        :key="idx"
        class="!m-0 text-gray-600"
      >
        {{ paragraph }}
      </p>
    </div>

    <ul
      v-if="section.techStack && section.techStack.length"
      class="mt-4 flex flex-wrap gap-4"
    >
      <li
        v-for="tech in section.techStack"
        :key="tech"
        class="!m-0 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs text-gray-700"
      >
        {{ tech }}
      </li>
    </ul>

    <ul
      v-if="section.links && section.links.length"
      class="mt-3 flex flex-wrap gap-4"
    >
      <li v-for="link in section.links" :key="link.url">
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 underline hover:text-green-500"
        >
          {{ link.label }}
          <v-icon name="px-external-link" size="14" />
        </a>
      </li>
    </ul>

    <div class="mt-5">
      <PhotoAlbum :images="section.album" />
    </div>
  </div>
</template>
