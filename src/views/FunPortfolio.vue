<script lang="ts" setup>
import PortfolioSectionContent from '@/components/PortfolioSection.vue'
import { funPortfolio } from '@/data/portfolio'
</script>

<template>
  <div class="px-6 py-8">
    <div class="mb-10 border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-800">Fun Portfolio</h1>
      <p class="mt-1 text-gray-500">Side projects I build for the love of it.</p>
    </div>

    <div class="flex flex-col gap-12">
      <section
        v-for="section in funPortfolio"
        :key="section.id"
        class="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
      >
        <PortfolioSectionContent :section="section" />
      </section>
    </div>
  </div>
</template>
