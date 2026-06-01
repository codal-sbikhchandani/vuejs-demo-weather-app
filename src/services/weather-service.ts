import type { WeatherResponse } from '@/types/weather-response'
import CityData from '@/data/indian-cities-coordinates.json'

const BASE_METEO_URL = 'https://api.open-meteo.com/v1/forecast'

const getCityName = (item: WeatherResponse) =>
  CityData.find(
    ({ lat, lng }) =>
      Number(lat).toFixed(1) === Number(item.latitude).toFixed(1) &&
      Number(lng).toFixed(1) === Number(item.longitude).toFixed(1),
  )?.city ?? ''

export const getWeatherDataFromCoords = async (
  lat: string[],
  lon: string[],
): Promise<WeatherResponse[]> => {
  const latStr = lat.join(',')
  const lonStr = lon.join(',')

  const response = await fetch(
    `${BASE_METEO_URL}?latitude=${latStr}&longitude=${lonStr}&hourly=temperature_2m&current=temperature_2m,is_day,cloud_cover,rain`,
  )
  const list = await response.json()

  if (list instanceof Array) {
    return list.map((item: WeatherResponse) => ({
      ...item,
      city: getCityName(item),
    }))
  } else {
    return [
      {
        ...list,
        city: getCityName(list),
      },
    ]
  }
}
