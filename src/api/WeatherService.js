const KEY = 'd4e4a060a1f951d7a177e5bdfc448049'
const WeatherService = {
  parseCityInfo: async (city, state) => {
    if (typeof city === 'string'  && typeof state === 'string') {
      const usaCities = await (await fetch('/assets/usa.city.list.json')).json()
      return usaCities.filter(_city =>
        _city.state.toUpperCase() === state
          && _city.name.toUpperCase() === city
      )
    }
  },
  getCurrentWeather: async (cityName, state) => {
    let city = await WeatherService.parseCityInfo(cityName, state)
    let cityWeather = {}
    if (city.length) {
      cityWeather = {
        name: cityName,
        state,
        ... await (
          await fetch(
            'https://api.openweathermap.org/data/2.5/onecall' +
            `?lat=${city[0].coord.lat}` +
            `&lon=${city[0].coord.lon}` +
            `&units=imperial` +
            `&appid=${KEY}`
          )).json()
      }
    }
    return cityWeather
  }
}

export default WeatherService