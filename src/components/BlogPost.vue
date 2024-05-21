<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import axios from 'axios';

export default defineComponent({
  setup() {
    const route = useRoute();
    const content = ref('');

    const loadPost = async (slug: string) => {
      try {
        const response = await axios.get(`/posts/${slug}/post.md`);
        const md = new MarkdownIt();
        content.value = md.render(response.data);
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    watch(
      () => route.params.slug,
      (newSlug) => {
        if (newSlug) {
          loadPost(newSlug as string);
        }
      },
      { immediate: true }
    );

    onMounted(() => {
      if (route.params.slug) {
        loadPost(route.params.slug as string);
      }
    });

    return {
      content
    };
  }
});
</script>
