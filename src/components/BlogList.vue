<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import MarkdownPreview from '@/components/MarkdownPreview.vue'
import yaml from 'js-yaml'

type Post = {
  slug: string
}

type PostContent = {
  title?: string
  createdAt?: string
  content: string
  slug: string
}

export default defineComponent({
  name: 'BlogList',
  components: {
    MarkdownPreview
  },
  setup() {
    const route = useRoute()
    const profile = {
      profilePicURL: '/images/square-headshot-medium-size.png',
      displayName: 'Catherine Luse'
    }

    const { smAndDown } = useDisplay()

    const posts = ref<PostContent[]>([])
    const md = new MarkdownIt()

    const fetchPostContent = async (slug: string) => {
      try {
        const response = await axios.get(`/posts/${slug}/post.md`)
        const content = response.data
        const match = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/)
        if (match) {
          const frontMatter = yaml.load(match[1])
          const markdownContent = match[2]
          const postContent: PostContent = {
            title: frontMatter.title,
            createdAt: frontMatter.createdAt,
            content: markdownContent,
            slug
          }
          return postContent
        }
        return null
      } catch (error) {
        console.error('Error loading post:', error)
        return null
      }
    }

    const loadPosts = async () => {
      const postList: Post[] = [
        {
          slug: 'immigration-video'
        },
        {
          slug: 'basic-content-filter'
        },
        {
          slug: 'jan-2025-moderation'
        },
        {
          slug: 'jan-2025-voting-feedback'
        },
        {
          slug: 'oct-2024-update'
        },
        {
          slug: 'video'
        },
        {
          slug: 'events'
        },
        {
          slug: 'discussions'
        },
        {
          slug: 'forums'
        }
      ]

      const loadedPostsData = await Promise.all(
        postList.map(async (post) => {
          const content = await fetchPostContent(post.slug)
          return content
        })
      )

      posts.value = loadedPostsData.filter((post) => post !== null) as PostContent[]
    }

    onMounted(() => {
      loadPosts()
    })

    return {
      posts,
      md,
      route,
      profile,
      smAndDown,
      relativeTime
    }
  }
})
</script>

<template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.slug"
      class="relative my-1 flex-col rounded-lg border bg-white px-6"
    >
      <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">
        <h2 class="cursor-pointer hover:text-gray-500 text-2xl text-blue-500">
          {{ post.title }}
        </h2>
      </router-link>
      <span class="text-gray-500">{{
        `Catherine posted ${post.createdAt ? relativeTime(post.createdAt) : ''}`
      }}</span>

      <div v-if="post?.content" class="my-2 border-gray-400">
        <MarkdownPreview :text="post.content" :disable-gallery="true" :word-limit="50" />
      </div>
    </li>
  </ul>
</template>
