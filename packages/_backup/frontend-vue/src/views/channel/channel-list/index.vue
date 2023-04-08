<template>
  <div class="flex flex-shrink-0 flex-col h-100% w-340px bg-channel-list overflow-scroll"> 
    <Search />
    <template v-for="(item, index) in channels" :key="index">
      <Item :data="item" :is-active="index === activeIndex" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import Item from './components/Item.vue';
import Search from './components/Search.vue';

const activeIndex = ref(1);

const channels = reactive([{
  title: 'Courtney Henry',
  avatar: '',
  message: 'So, what\'s your plan this weekend?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}, {
  title: 'Albert Flores',
  avatar: '',
  message: 'What\'s the progress on that task?',
}])

</script>