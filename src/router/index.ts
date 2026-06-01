import HomeComponent from '@/pages/HomeComponent.vue'
import WeatherDetail from '@/pages/WeatherDetail.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '/weather-details/:city',
    component: WeatherDetail,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
