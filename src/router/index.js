import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista',
    name: 'List',
    component: List,
    children: [
      {
        path: 'detalle',
        name: 'Detail',
        component: Detail,
      },
    ],
  },
  {
    path: '/favoritos',
    name: 'ListFavorite',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
