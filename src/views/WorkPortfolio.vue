<script lang="ts" setup>
import PortfolioTimeline from '@/components/PortfolioTimeline.vue'
import { workPortfolio } from '@/data/portfolio'

const resumeUrl = '/CatherineLuseResume.pdf'
</script>

<template>
  <div class="px-6 py-8">
    <div
      class="mb-10 flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Work Portfolio</h1>
        <p class="mt-1 text-gray-500">My professional history as a software engineer.</p>
      </div>
      <a
        :href="resumeUrl"
        download
        class="inline-flex w-fit items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
      >
        <v-icon name="px-download" size="18" />
        <span>Download resume</span>
      </a>
    </div>

    <PortfolioTimeline :sections="workPortfolio" />
  </div>
</template>
