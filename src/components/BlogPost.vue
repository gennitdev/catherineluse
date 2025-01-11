<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import yaml from 'js-yaml'
import MarkdownPreview from './MarkdownPreview.vue' // Adjust the import path as needed

export default defineComponent({
  components: {
    MarkdownPreview
  },
  setup() {
    const route = useRoute()
    const markdownContent = ref('')
    const title = ref('')
    const createdAt = ref('')

    const loadPost = async (slug: string) => {
      try {
        const response = await axios.get(`/posts/${slug}/post.md`)
        const rawContent = response.data

        // Extract front matter and markdown content
        const match = rawContent.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/)
        if (match) {
          const frontMatter = yaml.load(match[1])
          title.value = frontMatter.title
          createdAt.value = frontMatter.createdAt
          markdownContent.value = match[2] // Store raw markdown instead of rendered HTML
        } else {
          markdownContent.value = rawContent // Store raw markdown
        }
      } catch (error) {
        console.error('Error loading post:', error)
      }
    }

    watch(
      () => route.params.slug,
      (newSlug) => {
        if (newSlug) {
          loadPost(newSlug as string)
        }
      },
      { immediate: true }
    )

    onMounted(() => {
      if (route.params.slug) {
        loadPost(route.params.slug as string)
      }
    })

    return {
      markdownContent,
      title,
      createdAt
    }
  }
})
</script>

<template>
  <div>
    <router-link to="/" class="text-blue-500 hover:underline flex items-center">
      <v-icon name="px-chevron-left" />
      <span class="ml-1">Back to list</span>
    </router-link>
    <div v-if="title">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <p class="text-gray-500">{{ new Date(createdAt).toLocaleDateString() }}</p>
    </div>
    <MarkdownPreview 
      :text="markdownContent"
      :disable-gallery="true"
      :word-limit="100"
    />
  </div>
</template>