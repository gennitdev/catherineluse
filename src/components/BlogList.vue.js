import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import MarkdownPreview from '@/components/MarkdownPreview.vue'
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
    const posts = ref([])
    const md = new MarkdownIt()
    const fetchPostContent = async (slug) => {
      try {
        const response = await axios.get(`/posts/${slug}/post.md`)
        return response.data
      } catch (error) {
        console.error('Error loading post:', error)
        return ''
      }
    }
    const loadPosts = async () => {
      const postList = [
        {
          title: 'Video Demo of Multiforum',
          slug: 'video',
          createdAt: '2024-07-25T23:10:08.831Z'
        },
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
    getRelativeTime(date) {
      return relativeTime(date)
    }
  }
})
