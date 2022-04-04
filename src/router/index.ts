import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/catchAll(.*)',
    redirect: { name: 'home' },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('../views/AboutView.vue'),
        children: [
          {
            name: 'home',
            path: '/home',
            component: () => import('../views/HomeView.vue'),
          },
          {
            name: 'about',
            path: '/about',
            component: () => import('../views/AboutView.vue'),
          },
        ]
      },
    ]
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
