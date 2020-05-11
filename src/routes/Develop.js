import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import devCities from '../assets/sample-cities.json'
import devStocks from '../assets/sample-stocks.json'
import MyStockGraph from '../components/stocks/MyStockGraph'
import StockSearch from '../components/stocks/StockSearch'
import StockDetailsTable from '../components/stocks/StockDetailsTable'
import CitySearch from '../components/weather/CitySearch'
import CityDetailsTable from '../components/weather/CityDetailsTable'
import {Grid} from '@material-ui/core'

export default function Develop() {
  const {cities, setCities, stocks, setStocks } = useStore()
  if (!cities.length) setCities(devCities)
  if (!stocks.details.length) setStocks(devStocks)

  return (
    <Grid container spacing={3}>
      {stocks.details.length ?
        <Grid item xs={12}>
          <MyStockGraph />
        </Grid>
        : null}
      <Grid item xs={12} md={3}>
        <StockSearch />
      </Grid>
      {stocks.details.length ?
        <Grid item xs={12} md={9}>
          <StockDetailsTable />
        </Grid>
        : null}
      <Grid item xs={12} md={3}>
        <CitySearch />
      </Grid>
      {cities.length ?
        <Grid item xs={12} md={9}>
          <CityDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
