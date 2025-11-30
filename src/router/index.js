import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../pages/OverviewPage.vue'
import StationsPage from '../pages/StationsPage.vue'
import MonitoringPage from '../pages/MonitoringPage.vue'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewPage
  },
  {
    path: '/stations',
    name: 'Stations',
    component: StationsPage
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: MonitoringPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
