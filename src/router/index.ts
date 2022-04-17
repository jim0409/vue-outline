import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/catchAll(.*)',
    redirect: { name: 'home' },
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/about/about.vue'),
  },
  {
    name: 'whyRearSet',
    path: '/why_rear_set',
    component: () => import('@/views/about/about.vue'),
  },
  {
    // yamaha
    name: 'r15',
    path: '/rearset/yamaha/r15',
    component: () => import('@/views/rearset/yamaha/YamahaR15.vue'),
  },
  {
    // yamaha
    name: 'r3',
    path: '/rearset/yamaha/r3',
    component: () => import('@/views/rearset/yamaha/YamahaR3.vue'),
  },
  {
    // suzuki
    name: 'gsx-r150-semi',
    path: '/rearset/suzuki/gsx-r150/semi',
    component: () => import('@/views/rearset/suzuki/GSX-R150-SEMI.vue'),
  },
  {
    // suzuki
    name: 'gsx-r150-sport',
    path: '/rearset/suzuki/gsx-r150/sport',
    component: () => import('@/views/rearset/suzuki/GSX-R150-SPORT.vue'),
  },
  {
    // suzuki
    name: 'gsx-r150-race',
    path: '/rearset/suzuki/gsx-r150/race',
    component: () => import('@/views/rearset/suzuki/GSX-R150-RACE.vue'),
  },
  {
    name: 'shops',
    path: '/shops',
    component: () => import('@/views/shops/OnlineShops.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
