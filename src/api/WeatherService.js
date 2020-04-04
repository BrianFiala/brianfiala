//api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
// const KEY = 'd4e4a060a1f951d7a177e5bdfc448049'
export const WeatherService = {
  getCityInfo: async (cityState) => {
    if (cityState.city && cityState.state) {
      const usaCities = await (await fetch('/assets/usa.city.list.json')).json()
      return usaCities.filter(city =>
        city.state.toUpperCase() === cityState.state
          && city.name.toUpperCase() === cityState.city
      )
    }
  }
}
