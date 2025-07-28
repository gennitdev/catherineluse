<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ref } from 'vue'

type GalleryItem = {
  href: string
  src: string
  thumbnail: string
  width: number
  height: number
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
  <div class="w-full markdown-body">
    <v-md-preview :text="shownText" />
    <button
      v-if="shouldShowMoreButton"
      class="pl-6 pb-8 text-sm text-blue-600 hover:underline"
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
  margin-left: 1.5rem !important;
}

h2 {
  font-size: 1.2rem !important;
  margin-top: 1.5rem !important;
} /* p within nested list should have no margin */
</style>
