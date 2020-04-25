export const mergedCityInfo = (city, state, newCityInfo, cities) => {
  const newCities = [...cities]
  let alreadyHasCity = false
  for (let i = 0; i < newCities.length; ++i) {
    if (city === newCities[i].name && state === newCities[i].state) {
      newCities[i] = newCityInfo
      alreadyHasCity = true
      break
    }
  }
  if (!alreadyHasCity) {
    newCities.push(newCityInfo)
  }
  
  return newCities
}
