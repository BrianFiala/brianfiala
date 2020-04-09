import style from './style'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { useState, useRef } from 'preact/hooks'
import { WeatherService } from '../../api/WeatherService'

const Weather = () => {
  const cityInput = useRef(null)
  const stateInput = useRef(null)
  const [cities, setCities] = useState([])

  async function onSubmit(event) {
    event.preventDefault()
    const city = cityInput.current.value.toUpperCase()
    const state = stateInput.current.value.toUpperCase()
    if (city && state) {
      const newCity = await WeatherService.getCityInfo(city, state)
      if (newCity) {
        setCities([...cities, ...newCity ])
        cityInput.current.value = ''
        stateInput.current.value = ''
      }
    }
  }

  return (
    <div class={style.weather}>
      <Card raised>
        <CardContent>
          <Typography variant="h6">
              Wetaher card
          </Typography><br />
          <Typography variant="h3">
              Welcome to weather route
          </Typography><br />
          <Typography variant="body2">
              Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">OKAY</Button>
        </CardActions>
      </Card>

      {cities.length ?
        <table>
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
      }<br />
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
export default Weather