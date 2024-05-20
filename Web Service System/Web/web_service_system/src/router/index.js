import { createRouter, createWebHashHistory } from 'vue-router'
import Header from "@/header/Header.vue";
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Header,
    redirect: "/firstPage",
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
        component: () => import("@/views/Search.vue"),
        meta: { title: 'Search' }
      },
      {
        path: 'timeline',
        name: 'Timeline',
        component: () => import("@/views/TimeLine.vue"),
        meta: { title: 'Timeline' }
      },
      {
        path: '/knowledgeMap',
        name: 'KnowledgeMap',
        component: () => import("@/views/KnowledgeMap"),
        meta: { title: 'KnowledgeMap' }
      },
    ]
  },
  {
    path: '/firstPage',
    name: 'FirstPage',
    component: () => import("@/views/FirstPage"),
    meta: { title: 'FirstPage' }
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
  {
    path: '/details/:id',
    name: 'DetailsPage',
    component: () => import("@/views/DetailPage.vue"),
    meta: { title: 'Details Page' }
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
