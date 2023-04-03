<template>
<div class="font-14 color-hint-light mb-30px">People</div>
  <div class="flex items-center mb-30px">
    <img class="w-40px h-40px mr-15px" :src="MenuMembers" alt="">
    <div class="font-18 color-hint">Chat</div>
  </div>
  <div class="flex items-center mb-30px">
    <img class="w-40px h-40px mr-15px" :src="MenuContributors" alt="">
    <div class="font-18 color-hint">Matches</div>
  </div>
  </template>
<script setup lang="ts">
import MenuMembers from '@/assets/imgs/menu-member.png'
import MenuContributors from '@/assets/imgs/menu-contributors.png'
</script>