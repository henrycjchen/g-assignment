<template>
  <div class="pl-30px flex flex-col justify-between mr-30px">
    <div>
      <Engage />
      <div class="w-165px h-1px bg-divider mb-30px"></div>
      <People />
    </div>
    <img class="w-119px h-33.44px" :src="LogoLeft" alt="">    
  </div>
</template>

<script setup lang="ts">
import Engage from './components/Engage.vue';
import People from './components/People.vue';
import LogoLeft from '@/assets/imgs/logo-left.png';
</script>