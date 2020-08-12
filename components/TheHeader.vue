<template>
  <header class="w-full fixed top-0 left-0 bg-transparent">
    <ul class="flex px-4">
      <div class="h-16 mr-auto pl-4 centering text-gray-200">
        logo
      </div>
      <li
        v-for="menu in menus"
        :key="menu.context"
        class="h-16 px-4 centering font-mono font-light text-sm text-gray-200"
      >
        {{ menu.context }}
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

type MenuType = {
  menus: {
    context: string;
    to: string;
  }[]
}

export default Vue.extend({
  name: 'AppToolbar',
  data (): MenuType {
    return {
      menus: [
        { context: 'プロフィール', to: '' },
        { context: 'ニュース', to: '' },
        { context: '動画', to: '' },
        { context: 'リンク', to: '' }
      ]
    }
  }
})
</script>
