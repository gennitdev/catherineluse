<script lang="ts">
import { computed, defineComponent } from 'vue'
import { setGallery } from 'vue-preview-imgs'
import MarkdownIt from 'markdown-it'
import { ref, watchEffect } from 'vue'

type GalleryItem = {
  href: string
  src: string
  thumbnail: string
  width: number
  height: number
}

function calculateAspectRatioFit(
  srcWidth: number,
  srcHeight: number,
  maxWidth: number,
  maxHeight: number
) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)
  return { width: srcWidth * ratio, height: srcHeight * ratio }
}

function parseMarkdownForImages(text: string) {
  const md = new MarkdownIt()
  const renderedText = md.render(text)
  const regex = /src="([^"]*)"/g
  const images: GalleryItem[] = []
  let match

  while ((match = regex.exec(renderedText)) !== null) {
    const src = match[1]
    const galleryItem: GalleryItem = {
      href: src,
      src,
      thumbnail: src,
      width: window.innerWidth,
      height: window.innerHeight
    }
    images.push(galleryItem)
  }

  return images
}

export default defineComponent({
  props: {
    disableGallery: {
      type: Boolean,
      default: false
    },
    showShowMore: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      required: true
    },
    wordLimit: {
      type: Number,
      default: 100
    }
  },
  setup(props) {
    // Define your reactive properties
    const embeddedImages = ref<GalleryItem[]>([])

    const countWords = (str: string) => {
      return str.trim().split(/\s+/).length
    }

    const showFullText = ref(!props.showShowMore || countWords(props.text) < props.wordLimit)

    const shouldShowMoreButton = computed(() => {
      if (!props.showShowMore) {
        return false
      }
      if (!props.text) {
        return false
      }
      const words = props.text.split(' ')
      return words.length > props.wordLimit
    })

    const toggleShowFullText = () => {
      showFullText.value = !showFullText.value
    }

    const shownText = computed(() => {
      if (showFullText.value) {
        return props.text
      }
      const words = props.text.split(' ')
      if (words.length > props.wordLimit) {
        return (
          words.slice(0, props.wordLimit).join(' ') + (words.length > props.wordLimit ? '...' : '')
        )
      }
      return props.text
    })

    return {
      embeddedImages,
      shownText,
      showFullText,
      toggleShowFullText,
      shouldShowMoreButton
    }
  }
})
</script>

<template>
  <div class="w-full">
    <v-md-preview :text="shownText" />
    <button
      v-if="shouldShowMoreButton"
      class="mb-8 text-sm text-blue-600 hover:underline"
      @click="toggleShowFullText"
    >
      {{ showFullText ? '...Show Less' : '...Show More' }}
    </button>
  </div>
</template>
<style>
p,
ul,
li {
  font-size: 0.9rem !important;
}

p {
  margin-bottom: 0.5rem !important;
  margin-top: 0.7rem !important;
}

ul {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

li {
  margin-bottom: 0.5rem !important;
}

h2 {
  font-size: 1.2rem !important;
  margin-top: 1.5rem !important;
} /* p within nested list should have no margin */
</style>
