<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getWeatherDataFromCoords } from '@/services/weather-service'
import { useWeatherStore } from '@/stores/weather'
import router from '@/router'
import CityData from '@/data/indian-cities-coordinates.json'

const searchText = ref('')
const store = useWeatherStore()

// onMounted(async () => {
//   const response = await getWeatherDataFromCoords('52.52,48.85', '13.41,2.35')

//   if (response instanceof Array) {
//     store.setWeatherList(response)
//   } else {
//     store.setWeatherList([response])
//   }
// })

const onSearchCity = async () => {
  const matchedCities = CityData.filter(({ city }) => city.includes(searchText.value))

  if (matchedCities.length) {
    const latArr = matchedCities.map((x) => x.lat)
    const lonArr = matchedCities.map((x) => x.lng)
    const response = await getWeatherDataFromCoords(latArr, lonArr)

    store.setWeatherList(response)
  }
}

const onWeatherClick = (city: string) => {
  router.push({ path: `/weather-details/${city}` })
}
</script>

<template>
  <h2>Enter city to search</h2>
  <input type="text" v-model="searchText" />
  <button @click="onSearchCity()">Search</button>
  <div v-if="store.weatherList.length > 0">
    <p>List of Cities</p>
    <div class="wrapper">
      <div
        v-for="item in store.weatherList"
        :key="item.latitude - item.longitude"
        class="widget"
        style="margin-right: 10px; cursor: pointer"
        @click="onWeatherClick(item.city)"
      >
        <p class="title">{{ item.city }}</p>
        <div class="degree">
          <p>Temp: {{ item.current.temperature_2m + item.current_units.temperature_2m }}</p>
        </div>
        <div class="country">
          <p>Day: {{ item.current.is_day === 1 ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<!--
<style scoped>
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #eee;
}
.wrapper {
  margin: 1rem;
}
.widget {
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  padding: 27px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 15px #ddd;
}
.icon {
  font-family: 'FontAwesome';
  float: right;
}
.widget > div {
  font-weight: 300;
  position: absolute;
  bottom: 27px;
  color: #b8b8b8;
}
.degree {
  font-size: 3em;
}
.country {
  text-align: center;
  font-size: 1em;
  line-height: 10px;
  color: #cbcbcb;
}
.title {
  color: #cbcbcb;
  font-size: 2rem;
  margin: 0;
  text-align: center;
  font-weight: 400;
  border-bottom: 1px solid;
}
.fa-sun-o {
  animation: sunRotate 3.7s infinite linear;
}
.fa-bolt {
  animation: bolt 0.5s infinite linear;
}
@keyframes sunRotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes bolt {
  0% {
    margin-right: 0;
  }
  50% {
    margin-right: -20px;
    color: #ffa500;
  }
  75% {
    margin-right: 0;
  }
  100% {
    margin-left: -20px;
  }
}
</style> -->
