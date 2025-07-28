<script lang="ts" setup>
const hostedDemoLink = 'https://topical.space/forums/cats/discussions'
</script>

<template>
  <div class="bg-green-500 p-4 text-white text-lg flex justify-center">
    <span
      >Check out the hosted demo of my project at
      <a :href="hostedDemoLink" target="_blank" class="underline cursor:hover"
        >topical.space <v-icon name="px-external-link" size="16" /></a
    ></span>
  </div>
</template>
