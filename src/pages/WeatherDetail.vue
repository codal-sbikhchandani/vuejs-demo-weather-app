<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather'
import { useRoute } from 'vue-router'

const store = useWeatherStore()
const route = useRoute()

const weatherDetail = store.weatherList.find((weather) => weather.city === route.params.city)
const dateTime =
  new Date(weatherDetail!.current.time).toLocaleDateString() +
  ' ' +
  new Date(weatherDetail!.current.time).toLocaleTimeString()
</script>

<template>
  <h2>{{ weatherDetail!.city }}</h2>
  <div>
    <p>Time:{{ dateTime }}</p>
    <p>
      Temp:
      {{ weatherDetail!.current.temperature_2m + weatherDetail!.current_units.temperature_2m }}
    </p>
    <p>
      Rain:
      {{ weatherDetail!.current.rain + weatherDetail!.current_units.rain }}
    </p>
  </div>
</template>
