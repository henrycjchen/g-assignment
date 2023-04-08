import { createRouter, createWebHistory } from 'vue-router'
import ChannelIndex from '../views/channel/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'channel',
      component: ChannelIndex
    },
  ]
})

export default router
