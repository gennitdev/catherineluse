<script lang="ts">
import { defineComponent, computed } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'AvatarPicture',
  props: {
    text: {
      type: String,
      required: true
    },
    isSquare: {
      type: Boolean,
      required: false,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    isLarge: {
      type: Boolean,
      required: false,
      default: false
    },
    isMedium: {
      type: Boolean,
      required: false,
      default: false
    },
    isSmall: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
  <img
    :src="src"
    :alt="text"
    :class="[
      isLarge ? 'h-48 w-48' : '',
      isMedium ? 'h-20 w-20' : '',
      isSmall ? 'h-8 w-8' : '',
      isSquare ? 'rounded-lg' : 'rounded-full'
    ]"
  />
</template>
