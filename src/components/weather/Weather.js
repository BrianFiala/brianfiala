import { h } from 'preact'
import style from './weather.scss'
import { useState, useRef } from 'preact/hooks'
import { WeatherService } from '../../api/WeatherService'

export default function Weather() {
  const cityInput = useRef(null)
  const stateInput = useRef(null)
  const [cities, setCities] = useState([])

  async function onSubmit(event) {
    event.preventDefault()
    const cityState = {
      city: cityInput.current.value.toUpperCase(),
      state: stateInput.current.value.toUpperCase()
    }
    if (cityState.city && cityState.state) {
      const newCity = await WeatherService.getCityInfo(cityState)
      setCities([...cities, ...newCity ])
      cityInput.current.value = ''
      stateInput.current.value = ''
    }
  }

  function generateCitiesTable() {
    return cities.length
      ? <table>
        <tr>
          <td>Name:</td>
          <td>Id:</td>
          <td>State:</td>
          <td>Latitude:</td>
          <td>Longitude:</td>
        </tr>
        {cities.map(city => (
          <tr>
            <td>{city.name}</td>
            <td>{city.id}</td>
            <td>{city.state}</td>
            <td>{city.coord.lat}</td>
            <td>{city.coord.lon}</td>
          </tr>
        ))}
      </table>
      : <p>Enter a city name and state to lookup details</p>
  }

  return (
    <div class={style.weather}>
      {generateCitiesTable()}<br />
      <form onSubmit={onSubmit}>
        <label style={{ margin: '10px' }} for="city">Enter a city name:</label>
        <input style={{ margin: '10px', padding: '5px' }} type="text" id="city-input" name="city" ref={cityInput} />
        <label style={{ margin: '10px' }} for="state">Enter a state abbreviation:</label>
        <input style={{ margin: '10px', padding: '5px' }} type="text" id="state-input" name="state" ref={stateInput} />
        <input style={{ margin: '10px', '-webkit-appearance': 'none' }} type="submit" value="fetch city details" />
      </form>
    </div>
  )
}
Weather.displayName = 'Weather'
