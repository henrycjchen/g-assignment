

<template>
  <div class="bg-main h-100vh w-100vw flex flex-col">
    <TopMenu />
    <div class="flex flex-1 pb-20px overflow-hidden">
      <LeftMenu />
      <RouterView />
    </div>
  </div>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './views/top-menu/index.vue';
import LeftMenu from './views/left-menu/index.vue';
</script>

<style scoped>

</style>
