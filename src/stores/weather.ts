import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { WeatherResponse } from '@/types/weather-response'

export const useWeatherStore = defineStore('counter', () => {
  const weatherList = ref<WeatherResponse[]>([])

  const setWeatherList = (data: WeatherResponse[]) => {
    weatherList.value.push(...data)
  }

  const clearList = () => (weatherList.value = [])

  return { weatherList, setWeatherList, clearList }
})
