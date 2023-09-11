// For Vue 3 with Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import JobsView from '../views/JobsView'
const vue3Routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/leaderboardview',
    name: 'leaderboardview',
    component: () => import(/* webpackChunkName: "about" */ '../views/LeaderboardView.vue')
  },

  {
    path: '/JobsView',
    name: 'JobsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/JobsView')
  },
  {
    path: '/ChartView',
    name: 'ChartView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartView')
  },


]

const vue3Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: vue3Routes
})

export { vue3Router as default } // Rename the default export
