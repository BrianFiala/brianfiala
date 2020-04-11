import { WeatherService } from '../api/WeatherService'
import { useState, useRef } from 'preact/hooks'
import {
  Card, CardContent, CardActions, 
  Button, Typography, Input,
  TableContainer, Table,
  TableHead, TableBody,
  TableRow, TableCell, Grid
} from '@material-ui/core'

export default function Weather() {
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
    <Grid container spacing={3}>
      {/* Info Card */}
      <Grid item>
        <Card raised>
          <CardContent>
            <Typography variant="h6">
              Weather card
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
        <br />
        <Card raised>
          <CardContent>
            <Typography variant="h6" inline>
              City Location Lookup
            </Typography>
            <Input
              style={{ margin: '10px', padding: '5px' }}
              type="text"
              id="city-input"
              name="city"
              inputRef={cityInput}
              placeholder="Enter a city"
            />
            <Input
              style={{ margin: '10px', padding: '5px' }}
              type="text"
              id="state-input"
              name="state"
              inputRef={stateInput}
              placeholder="Enter a state"
            />
          </CardContent>
          <CardActions>
            <Button size="large" onClick={onSubmit}>fetch details</Button>
          </CardActions>
        </Card>
        <br />
        {cities.length ?
          <Card raised>
            <CardContent>
              <TableContainer>
                <Table size="small" aria-label="city info table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name:</TableCell>
                      <TableCell align="right">ID:</TableCell>
                      <TableCell align="right">State:</TableCell>
                      <TableCell align="right">Latitude:</TableCell>
                      <TableCell align="right">Longitude:</TableCell>
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
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          : null }
      </Grid>
    </Grid>
  )
}
