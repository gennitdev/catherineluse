<script lang="ts" setup>
import type { PropType } from 'vue'
import type { PortfolioSection } from '@/data/portfolio'
import PortfolioSectionContent from '@/components/PortfolioSection.vue'

defineProps({
  sections: {
    type: Array as PropType<PortfolioSection[]>,
    default: () => []
  }
})
</script>

<template>
  <ol class="relative ml-3 border-l-2 border-gray-200">
    <li
      v-for="section in sections"
      :key="section.id"
      class="mb-12 ml-6 last:mb-0"
    >
      <!-- Timeline dot -->
      <span
        class="absolute -left-[9px] mt-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-green-500"
      />
      <PortfolioSectionContent :section="section" />
    </li>
  </ol>
</template>
