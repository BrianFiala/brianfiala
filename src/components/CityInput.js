import { WeatherService } from '../api/WeatherService'
import { useState, useRef } from 'preact/hooks'
import Title from '../components/Title'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Paper, Input } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}))

export default function CityInput() {
  const theme = useTheme()
  const classes = useStyles(theme)

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
    <Paper elevation={cities.length ? 1 : 8} className={classes.paper}>
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
    </Paper>
  )
}