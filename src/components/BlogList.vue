<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import MarkdownPreview from '@/components/MarkdownPreview.vue'

type Post = {
  title: string
  slug: string
  content?: string
  createdAt: string
}

export default defineComponent({
  name: 'BlogList',
  components: {
    MarkdownPreview
  },
  setup() {
    const route = useRoute()
    const profile = {
      profilePicURL: '/images/square-headshot-medium-size.jpeg',
      displayName: 'Catherine Luse'
    }

    const { smAndDown } = useDisplay()

    const posts = ref<Post[]>([])
    const md = new MarkdownIt()

    const fetchPostContent = async (slug: string) => {
      try {
        const response = await axios.get(`/posts/${slug}/post.md`)
        return response.data
      } catch (error) {
        console.error('Error loading post:', error)
        return ''
      }
    }

    const loadPosts = async () => {
      const postList: Post[] = [
        {
          title: 'Multiforum Demo Part 1: Event Search',
          slug: 'events',
          createdAt: '2024-06-20T00:34:16.027Z'
        },
        {
          title: 'Multiforum Demo Part 2: Discussions',
          slug: 'discussions',
          createdAt: '2024-06-20T00:34:16.027Z'
        },
        {
          title: 'Multiforum Demo Part 3: Finding forums',
          slug: 'forums',
          createdAt: '2024-06-20T00:34:16.027Z'
        }
      ]

      const loadedPosts = await Promise.all(
        postList.map(async (post) => {
          const content = await fetchPostContent(post.slug)
          return { ...post, content }
        })
      )

      posts.value = loadedPosts
    }

    onMounted(() => {
      loadPosts()
    })

    return {
      posts,
      md,
      route,
      profile,
      smAndDown
    }
  },
  methods: {
    getRelativeTime(date: string) {
      return relativeTime(date)
    }
  }
})
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.slug"
      class="relative my-1 flex-col rounded-lg border bg-white py-6 px-8"
    >
      <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">
        <h2 class="cursor-pointer hover:text-gray-500 font-bold text-lg">{{ post.title }}</h2>
      </router-link>
      <span class="text-gray-500">{{ `Catherine posted ${getRelativeTime(post.createdAt)}` }}</span>

      <div v-if="post?.content" class="my-2 border-gray-400">
        <MarkdownPreview :text="post.content" :disable-gallery="true" :word-limit="100" />
      </div>
    </li>
  </ul>
</template>
