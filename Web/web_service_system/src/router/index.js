import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "../layout/Layout.vue";
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: "/login",
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import("@/views/Home"),
        meta: { title: 'Home' }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import("@/views/Search"),
        meta: { title: 'Search' }
      },
      {
        path: 'timeline',
        name: 'TimeLine',
        component: () => import("@/views/TimeLine"),
        meta: { title: 'TimeLine' }
      },
      {
        path: 'knowledgeMap',
        name: 'KnowledgeMap',
        component: () => import("@/views/KnowledgeMap"),
        meta: { title: 'KnowledgeMap' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/LoginView.vue"),
    meta: { title: 'login Page' } // 设置页面标题
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/RegisterView.vue"),
    meta: { title: 'Register Page' } // 设置页面标题
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
