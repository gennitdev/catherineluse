<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { relativeTime } from '@/utils/dateTimeUtils'
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'BlogList',
  setup() {
    const route = useRoute()
    const profile = {
      profilePicURL: '/posts/sample-post/square-headshot-medium-size.jpeg',
      displayName: 'Catherine Luse'
    }

    const { smAndDown } = useDisplay()

    return {
      relativeTime,
      route,
      smAndDown,
      profile,
      posts: [{ title: 'Sample Post', slug: 'sample-post' }],
      theme: 'dark'
    }
  }
})
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.slug">
      <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">
        {{ post.title }}
      </router-link>
    </li>
  </ul>
</template>
