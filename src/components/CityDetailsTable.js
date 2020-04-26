import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import WeatherService from '../api/WeatherService'
import {mergedCityInfo} from '../utils/WeatherUtils'
import Title from './Title'
import MyPaper from './MyPaper'
import TableActions from './TableActions'
import {Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

export default function CityDetailsTable() {
  const {cities, setCities} = useStore()

  function removeCity(event, cityState) {
    event.preventDefault()
    const newCities = cities.filter(city => `${city.name},${city.state}` !== cityState)
    setCities(newCities)
  }

  async function refreshCity(event, cityState) {
    event.preventDefault()
    const cityAndState = cityState.split(',')
    const city = cityAndState[0]
    const state = cityAndState[1]
    const newCityInfo = await WeatherService.getCurrentWeather(city, state)
    if (newCityInfo.name) {
      const newCities = mergedCityInfo(city, state, newCityInfo, cities)
      setCities(newCities)
    }
  }

  return (
    <MyPaper>
      <Title>City details</Title>
      <Table size="small" aria-label="city info table">
        <TableHead>
          <TableRow>
            <TableCell>Actions</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Feels like</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cities.map((city) => (
            <TableRow key={city.name}>
              <TableCell component="th" scope="row">
                <TableActions
                  identifier={`${city.name},${city.state}`}
                  removeCallback={removeCity}
                  refreshCallback={refreshCity} />
              </TableCell>
              <TableCell scope="row">{city.name}, {city.state}</TableCell>
              <TableCell align="right">{city.current.weather[0].description}</TableCell>
              <TableCell align="right">{city.current.temp}</TableCell>
              <TableCell align="right">{city.current.feels_like}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MyPaper>
  )
}