<template>
  <div class="w-full">
    <TheHeader />
    <Nuxt class="w-full mx-auto min-h-screen py-16" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    TheHeader
  }
})
</script>
