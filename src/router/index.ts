import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/catchAll(.*)',
    redirect: { name: 'home' },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/homepage/HomeView.vue'),
  },
  {
    // yamaha
    name: 'r15',
    path: '/bikes/yamaha/r15',
    component: () => import('@/views/bikes/yamaha/YamahaR15.vue'),
  },
  {
    // yamaha
    name: 'r3',
    path: '/bikes/yamaha/r3',
    component: () => import('@/views/bikes/yamaha/YamahaR3.vue'),
  },
  {
    // honda
    name: 'cb650',
    path: '/bikes/honda/cb650',
    component: () => import('@/views/bikes/honda/HondaCB650.vue'),
  },
  {
    // honda
    name: 'cbr650',
    path: '/bikes/honda/cbr650',
    component: () => import('@/views/bikes/honda/HondaCBR650.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
