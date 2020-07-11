<template>
  <div class="w-full">
    <AppToolbar />
    <Nuxt class="w-full mx-auto min-h-screen py-16" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppToolbar from '@/components/AppToolbar.vue'

export default Vue.extend({
  name: 'Layout',
  components: {
    AppToolbar
  }
})
</script>
