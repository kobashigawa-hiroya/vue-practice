import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '../components/BookDetail.vue'
import VuexTest from '../components/VuexTest.vue'
import Child from '../components/Child.vue'
import Perrent from '../components/Perrent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/list',
    name: 'List',
    component: BookList
  },
  {
    path: '/list/:id',
    name: 'Book',
    component: BookDetail
  },
  {
    path: '/detail',
    name: 'detail',
    component: BookDetail
  },
  {
    path: '/vuex-test',
    name: 'vuex',
    component: VuexTest
  },
  {
    path: '/child',
    name: 'child',
    component: Child
  },
  {
    path: '/perrent',
    name: 'perrent',
    component: Perrent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
