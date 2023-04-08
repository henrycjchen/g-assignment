<template>
  <div class="flex-shrink-0 flex h-75px pl-20px items-center" :class="[isActive?'bg-divider':'']">
    <img class="w-40px h-40px mr-10px bg-placeholder border-rd-50%" src="" alt="">
    <div class="flex flex-col justify-center">
      <div class="font-heading-h5 color-text-primary mb-2px">
        Courtney Henry
      </div>
      <div class="font-heading-h6 color-text-secondary">
        So, what's your plan this weekend?
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type {Channel} from '../type';

const props = withDefaults(defineProps<{
  data: Channel,
  isActive: boolean,
}>(),{
  data: ()=> ({
    avatar: '',
    title: '',
    message: ''
  }),
  isActive: false,
})
</script>