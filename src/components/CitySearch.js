import { WeatherService } from '../api/WeatherService'
import { useRef } from 'preact/hooks'
import { h } from 'preact' /** @jsx h */
import Title from './Title'
import { Button, Input } from '@material-ui/core'

export default function CitySearch({cities, setCities}) {
  const cityInput = useRef(null)
  const stateInput = useRef(null)

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
    <>
      <Title>Lookup a city</Title>
      <Input
        style={{ margin: '10px', padding: '5px' }}
        type="text"
        id="city-input"
        name="city"
        inputRef={cityInput}
        placeholder="Enter a city" />
      <Input
        style={{ margin: '10px', padding: '5px' }}
        type="text"
        id="state-input"
        name="state"
        inputRef={stateInput}
        placeholder="Enter a state" />
      <Button color="primary" size="large" onClick={onSubmit}>LOOKUP</Button>
    </>
  )
}