<template>
  <header>
    <ul class="flex">
      <li
        v-for="menu in menus"
        :key="menu.context"
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
        { context: '配信', to: '' },
        { context: '音楽', to: '' },
        { context: 'ラジオ', to: '' },
        { context: 'リンク', to: '' }
      ]
    }
  }
})
</script>
