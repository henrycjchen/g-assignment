<template>
  <div class="flex justify-between h-55px items-center pl-20px pr-20px">
    <div>Share your story</div>
    <div class="h-44px w-104px flex justify-center items-center border-rd-50px border-1px border-solid border-text-secondary">
      <img class="w-24px h-24px mr-10px" :src="IconMember" alt="">
      <div class="font-15-heavy">4</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconMember from '@/assets/imgs/icon-member.png'
</script>