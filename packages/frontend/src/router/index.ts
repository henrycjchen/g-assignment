import { createRouter, createWebHistory } from 'vue-router'
import ChatIndex from '../views/chat/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatIndex
    },
  ]
})

export default router
