import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StateProvider'
import WeatherService from '../api/WeatherService'
import {mergedCityInfo} from '../utils/WeatherUtils'
import Title from './Title'
import MyPaper from './MyPaper'
import {makeStyles, useTheme} from '@material-ui/styles'
import TrashIcon from '@material-ui/icons/DeleteOutlined'
import RefreshIcon from '@material-ui/icons/RefreshOutlined'
import {Container, IconButton, Table, TableHead, TableBody, TableRow, TableCell} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  iconButton: {
    paddingLeft: theme.spacing(1)
  },
  actionIconContainer: {
    display: 'flex'
  }
}))

export default function CityDetailsTable() {
  const {cities, setCities} = useStore()
  const classes = useStyles(useTheme())

  function removeCity(event, cityName, state) {
    event.preventDefault()
    const newCities = cities.filter(city => cityName !== city.name || state !== city.state)
    setCities(newCities)
  }

  async function refreshCity(event, city, state) {
    event.preventDefault()
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
                <Container
                  disableGutters={true}
                  className={classes.actionIconContainer}>
                  <IconButton
                    edge="start"
                    aria-label="remove"
                    className={classes.iconButton}
                    onClick={(event) => {removeCity(event, city.name, city.state)}}>
                    <TrashIcon />
                  </IconButton>
                  <IconButton
                    edge="start"
                    aria-label="refresh"
                    className={classes.iconButton}
                    onClick={(event) => {refreshCity(event, city.name, city.state)}}>
                    <RefreshIcon />
                  </IconButton>
                </Container>
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