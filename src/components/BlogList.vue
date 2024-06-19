<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

type Post = {
  title: string
  slug: string
  content?: string
}

export default defineComponent({
  name: 'BlogList',
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
        { title: 'Multiforum demo: Event Search', slug: 'events' },
        { title: 'Multiforum demo: Discussions', slug: 'discussions' },
        { title: 'Multiforum demo: Finding forums', slug: 'forums' }
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
  }
})
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.slug" class="mb-4">
      <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">
        <h2>{{ post.title }}</h2>
      </router-link>
      <div v-html="md.render(post.content.slice(0, 200) + '...')"></div>
      <router-link
        :to="{ name: 'BlogPost', params: { slug: post.slug } }"
        class="text-blue-500 hover:underline"
      >
        View more
      </router-link>
    </li>
  </ul>
</template>
