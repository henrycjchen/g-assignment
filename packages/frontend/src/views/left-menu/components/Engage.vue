<template>
  <div class="font-14 color-hint-light mb-30px">Engage</div>
  <div class="flex items-center mb-30px">
    <img class="w-40px h-40px mr-15px" :src="MenuForum" alt="">
    <div class="font-18 color-hint">Forum</div>
  </div>
  <div class="flex items-center mb-30px">
    <img class="w-40px h-40px mr-15px" :src="MenuChat" alt="">
    <div class="font-18 color-hint">Chat</div>
  </div>
  <div class="flex items-center mb-30px">
    <img class="w-40px h-40px mr-15px" :src="MenuMatches" alt="">
    <div class="font-18 color-hint">Matches</div>
  </div>

</template>

<script setup lang="ts">
import MenuForum from '@/assets/imgs/menu-forum.png'
import MenuChat from '@/assets/imgs/menu-chat.png'
import MenuMatches from '@/assets/imgs/menu-Matches.png'
</script>