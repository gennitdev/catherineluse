<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'

// Navigation items. On wide screens these render as a vertical list in the
// sidebar; on narrow screens they collapse into a dropdown menu.
const navItems = [
  { label: 'Work Portfolio', to: { name: 'WorkPortfolio' } },
  { label: 'Fun Portfolio', to: { name: 'FunPortfolio' } },
  { label: 'Blog', to: { name: 'BlogList' } },
  { label: 'Contact', to: { name: 'Contact' } }
]

const { smAndDown } = useDisplay()
const route = useRoute()
const open = ref(false)

const currentLabel = computed(() => {
  const match = navItems.find((item) => item.to.name === route.name)
  return match ? match.label : 'Menu'
})

const closeDropdown = () => {
  open.value = false
}
</script>

<template>
  <nav class="w-full">
    <!-- Wide screens: vertical list -->
    <ul v-if="!smAndDown" class="flex flex-col gap-1">
      <li v-for="item in navItems" :key="item.label">
        <router-link
          :to="item.to"
          class="block rounded-md px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          exact-active-class="bg-gray-200 font-semibold text-gray-900"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>

    <!-- Narrow screens: dropdown -->
    <div v-else class="relative">
      <button
        type="button"
        class="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left text-gray-700"
        aria-haspopup="true"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span>{{ currentLabel }}</span>
        <svg
          class="h-4 w-4 transition-transform"
          :class="{ 'rotate-180': open }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <ul
        v-if="open"
        class="absolute left-0 right-0 z-20 mt-1 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
      >
        <li v-for="item in navItems" :key="item.label">
          <router-link
            :to="item.to"
            class="block px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
            exact-active-class="bg-gray-100 font-semibold text-gray-900"
            @click="closeDropdown"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
