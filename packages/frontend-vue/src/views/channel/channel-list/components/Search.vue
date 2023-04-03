<template>
  <div class="flex items-center h-64px w-100% pl-20px pr-20px box-border"
    style="box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1);"
  >
    <img class="w-18px h-18px mr-10px" :src="IconSearch" alt="">
    <div class="font-15 color-text-secondary">Search</div>
  </div>
</template>

<script setup lang="ts">
import IconSearch from '@/assets/imgs/icon-search.png';
</script>