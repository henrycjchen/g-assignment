<template>
  <div class="flex items-center">
    <Search />
    <Time />
    <img class="w-24px h-24px mr-22px" :src="IconBell" alt="">
    <img class="w-24px h-24px mr-20px"  :src="IconHelp" alt="">
    <img class="w-36px h-36px"  :src="AvatarWomanShort" alt="">
  </div>
</template>

<script setup lang="ts">
import Search from './components/Search.vue';
import Time from './components/Time.vue';
import IconBell from '@/assets/imgs/icon-bell.png';
import IconHelp from '@/assets/imgs/icon-help-circle.png';
import AvatarWomanShort from '@/assets/imgs/avatar-woman-short.png';
</script>