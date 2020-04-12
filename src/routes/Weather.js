import { WeatherService } from '../api/WeatherService'
import { useState, useRef } from 'preact/hooks'
import Title from '../components/Title'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Paper, Input, Table, TableHead,
  TableBody, TableRow, TableCell, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}))

export default function Weather() {
  const cityInput = useRef(null)
  const stateInput = useRef(null)
  const [cities, setCities] = useState([])
  const theme = useTheme()
  const classes = useStyles(theme) 

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
    <Grid container spacing={3}>

      {/* Info Card */}
      <Grid item xs={12}>
        <InfoItem
          identifier="Weather Card"
          title="Welcome to weather route"
          message={message} />
      </Grid>

      {/* City input item */}
      <Grid item xs={12} md={3}>
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
      </Grid>

      {/* Table item */}
      {cities.length ?
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <Title>City details</Title>
            <Table size="small" aria-label="city info table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">State</TableCell>
                  <TableCell align="right">Latitude</TableCell>
                  <TableCell align="right">Longitude</TableCell>
                </TableRow>
              </TableHead>
            
              <TableBody>
                {cities.map((city) => (
                  <TableRow key={city.name}>
                    <TableCell component="th" scope="row">
                      {city.name}
                    </TableCell>
                    <TableCell align="right">{city.id}</TableCell>
                    <TableCell align="right">{city.state}</TableCell>
                    <TableCell align="right">{(city.coord.lat).toFixed(2)}</TableCell>
                    <TableCell align="right">{(city.coord.lon).toFixed(2)}</TableCell>
                  </TableRow> ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        : null }
    </Grid>
  )
}
