import {h} from 'preact' /** @jsx h */
import {Grid} from '@material-ui/core'
import {useStore} from '../api/StateProvider'
import devCities from '../assets/sample-cities.json'
import devStocks from '../assets/sample-stocks.json'
import MyResponsiveLine from '../components/MyResponsiveLine'
import StockSearch from '../components/StockSearch'
import StockDetailsTable from '../components/StockDetailsTable'
import CitySearch from '../components/CitySearch'
import CityDetailsTable from '../components/CityDetailsTable'

export default function Develop() {
  const {cities, setCities, stocks, setStocks } = useStore()

  if (!cities.length) {
    setCities(devCities)
  }

  if (!stocks.length) {
    setStocks(devStocks)
  }

  return (
    <Grid container spacing={3}>
      {/* Stocks Graph item */}
      {stocks.length ?
        <Grid item xs={12}>
          <MyResponsiveLine data={stocks} title="Timeseries" height="200px" width="100%" />
        </Grid>
        : null}
      {/* Stocks Symbol input item */}
      <Grid item xs={12} md={3}>
        <StockSearch elevation={stocks.length ? 1 : 16} />
      </Grid>
      {/* Stocks Table item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <StockDetailsTable />
        </Grid>
        : null}
      {/* City search item */}
      <Grid item xs={12} md={3}>
        <CitySearch elevation={cities.length ? 1 : 16} />
      </Grid>
      {/* City details item */}
      {cities.length ?
        <Grid item xs={12} md={9}>
          <CityDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
