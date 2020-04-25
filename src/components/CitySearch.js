import {h} from 'preact' /** @jsx h */
import {useRef} from 'preact/hooks'
import {Button, Input} from '@material-ui/core'
import {useStore} from '../api/StateProvider'
import WeatherService from '../api/WeatherService'
import {mergedCityInfo} from '../utils/WeatherUtils'
import Title from './Title'
import MyPaper from './MyPaper'

export default function CitySearch({elevation}) {
  const {cities, setCities } = useStore()
  const cityInput = useRef(null)
  const stateInput = useRef(null)

  async function onSubmit(event) {
    event.preventDefault()
    const city = cityInput.current.value.toUpperCase()
    const state = stateInput.current.value.toUpperCase()
    if (city && state) {
      const newCityInfo = await WeatherService.getCurrentWeather(city, state)
      if (newCityInfo.name) {
        const newCities = mergedCityInfo(city, state, newCityInfo, cities)
        setCities(newCities)
        cityInput.current.value = ''
        stateInput.current.value = ''
      }
    }
  }

  return (
    <MyPaper elevation={elevation}>
      <Title>Lookup a city</Title>
      <Input
        style={{margin: '10px', padding: '5px'}}
        type="text"
        id="city-input"
        name="city"
        inputRef={cityInput}
        placeholder="Enter a city" />
      <Input
        style={{margin: '10px', padding: '5px'}}
        type="text"
        id="state-input"
        name="state"
        inputRef={stateInput}
        placeholder="Enter a state" />
      <Button
        color="primary"
        aria-label="fetch weather"
        size="large"
        onClick={onSubmit}>
        FETCH WEATHER
      </Button>
    </MyPaper>
  )
}