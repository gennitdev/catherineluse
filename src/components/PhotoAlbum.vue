<script lang="ts" setup>
import type { PropType } from 'vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { AlbumImage } from '@/data/portfolio'

// A read-only photo album inspired by Multiforum's DiscussionAlbum.
// Shows a main image with a thumbnail strip and captions, and opens a
// lightbox on click. Unlike the Multiforum version it has no forms for
// editing captions or uploading images — everything is supplied in source.
const props = defineProps({
  images: {
    type: Array as PropType<AlbumImage[]>,
    default: () => []
  }
})

const activeIndex = ref(0)
const isLightboxOpen = ref(false)

const images = computed(() => props.images.filter(Boolean))
const activeImage = computed(() => images.value[activeIndex.value] || null)
const hasMultiple = computed(() => images.value.length > 1)

// Track images that fail to load so we can fall back to the placeholder
// tile instead of showing the browser's broken-image icon.
const failedUrls = ref(new Set<string>())
const markFailed = (url?: string | null) => {
  if (url && !failedUrls.value.has(url)) {
    failedUrls.value = new Set(failedUrls.value).add(url)
  }
}
const showImage = (image: AlbumImage | null) =>
  !!image && !!image.url && !failedUrls.value.has(image.url)

const goLeft = () => {
  if (!images.value.length) return
  activeIndex.value =
    activeIndex.value === 0 ? images.value.length - 1 : activeIndex.value - 1
}

const goRight = () => {
  if (!images.value.length) return
  activeIndex.value =
    activeIndex.value === images.value.length - 1 ? 0 : activeIndex.value + 1
}

const openLightbox = (index: number) => {
  activeIndex.value = index
  isLightboxOpen.value = true
}

const closeLightbox = () => {
  isLightboxOpen.value = false
}

// Touch swipe handling for the main image.
const touchStartX = ref(0)
const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (touch) touchStartX.value = touch.clientX
}
const handleTouchEnd = (event: TouchEvent) => {
  const touch = event.changedTouches[0]
  if (!touch) return
  const distance = touch.clientX - touchStartX.value
  if (Math.abs(distance) > 50) {
    distance > 0 ? goLeft() : goRight()
  }
}

// Keyboard navigation while the lightbox is open.
const handleKeyDown = (event: KeyboardEvent) => {
  if (!isLightboxOpen.value) return
  if (event.key === 'Escape') closeLightbox()
  else if (event.key === 'ArrowRight') goRight()
  else if (event.key === 'ArrowLeft') goLeft()
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))
</script>

<template>
  <div v-if="images.length" class="w-full">
    <!-- Carousel -->
    <div class="overflow-hidden rounded-lg bg-black">
      <div class="flex flex-col">
        <!-- Main image -->
        <div class="flex items-center justify-center">
          <div
            class="relative w-full touch-pan-x overflow-hidden rounded-lg"
            style="height: 400px"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <!-- Counter -->
            <div class="pointer-events-none absolute left-2 top-2 z-10">
              <span class="rounded bg-black/60 px-2 py-1 text-xs text-white">
                {{ `${activeIndex + 1} of ${images.length}` }}
              </span>
            </div>

            <!-- Arrows -->
            <button
              v-if="hasMultiple"
              type="button"
              class="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Previous image"
              @click.stop="goLeft"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              v-if="hasMultiple"
              type="button"
              class="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              aria-label="Next image"
              @click.stop="goRight"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Image (or placeholder) -->
            <div
              class="h-full w-full cursor-pointer"
              @click="openLightbox(activeIndex)"
            >
              <img
                v-if="showImage(activeImage)"
                :src="activeImage.url"
                :alt="activeImage.alt || ''"
                class="h-full w-full object-contain"
                @error="markFailed(activeImage?.url)"
              />
              <div
                v-else
                class="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 px-4 text-center text-gray-300"
              >
                <svg
                  class="mb-3 h-10 w-10 opacity-60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" stroke-linecap="round" />
                </svg>
                <span class="text-sm">{{ activeImage?.alt || 'Image coming soon' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Thumbnail strip -->
        <div v-if="hasMultiple" class="w-full overflow-x-auto">
          <div class="flex w-full gap-2 p-2">
            <button
              v-for="(image, idx) in images"
              :key="idx"
              type="button"
              class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all"
              :class="
                idx === activeIndex
                  ? 'border-green-500'
                  : 'border-gray-600 hover:border-gray-400'
              "
              @click="activeIndex = idx"
            >
              <img
                v-if="showImage(image)"
                :src="image.url"
                :alt="image.alt || ''"
                class="h-full w-full object-cover"
                @error="markFailed(image.url)"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-[10px] text-gray-400"
              >
                {{ idx + 1 }}
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Caption -->
      <div class="px-2 pb-2 pt-1 text-center text-xs text-gray-300">
        <span v-if="activeImage?.caption">{{ activeImage.caption }}</span>
        <span v-else class="italic text-gray-500">No caption</span>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="isLightboxOpen"
        class="fixed inset-0 z-[1000] flex flex-col bg-black/95"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        @click.self="closeLightbox"
      >
        <!-- Top bar -->
        <div class="flex items-center justify-between p-4 text-white">
          <span class="text-sm">
            {{ `${activeIndex + 1} of ${images.length}` }}
          </span>
          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Close"
            @click="closeLightbox"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- Image area -->
        <div
          class="relative flex flex-1 items-center justify-center overflow-hidden px-4"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <button
            v-if="hasMultiple"
            type="button"
            class="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Previous image"
            @click="goLeft"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <img
            v-if="showImage(activeImage)"
            :src="activeImage.url"
            :alt="activeImage.alt || ''"
            class="max-h-full max-w-full object-contain"
            @error="markFailed(activeImage?.url)"
          />
          <div
            v-else
            class="flex h-64 w-full max-w-lg flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-gray-300"
          >
            <span class="text-sm">{{ activeImage?.alt || 'Image coming soon' }}</span>
          </div>

          <button
            v-if="hasMultiple"
            type="button"
            class="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Next image"
            @click="goRight"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <!-- Caption + thumbnails -->
        <div class="p-4 text-center text-white">
          <p v-if="activeImage?.caption" class="mb-3 text-sm">
            {{ activeImage.caption }}
          </p>
          <div
            v-if="hasMultiple"
            class="mx-auto flex max-w-full justify-center gap-2 overflow-x-auto"
          >
            <button
              v-for="(image, idx) in images"
              :key="idx"
              type="button"
              class="h-14 w-14 flex-shrink-0 overflow-hidden rounded border-2 transition-all"
              :class="
                idx === activeIndex
                  ? 'border-green-500'
                  : 'border-transparent opacity-60 hover:opacity-100'
              "
              @click="activeIndex = idx"
            >
              <img
                v-if="showImage(image)"
                :src="image.url"
                :alt="image.alt || ''"
                class="h-full w-full object-cover"
                @error="markFailed(image.url)"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gray-800 text-[10px] text-gray-400"
              >
                {{ idx + 1 }}
              </div>
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
