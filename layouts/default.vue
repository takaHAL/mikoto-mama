<template>
  <div>
    <AppToolbar />
    <Nuxt />
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
