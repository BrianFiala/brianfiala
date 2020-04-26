import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import message from '../assets/message.txt'
import MyResponsiveLine from '../components/MyResponsiveLine'
import StockDetailsTable from '../components/StockDetailsTable'
import StockSearch from '../components/StockSearch'
import InfoItem from '../components/InfoItem'
import {Grid} from '@material-ui/core'

export default function Stocks() {
  const {stocks} = useStore()
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoItem
          identifier="Stock Card"
          title="Welcome to stocks route"
          message={message} />
      </Grid>
      {stocks.length ?
        <Grid item xs={12}>
          <MyResponsiveLine data={stocks} title="Timeseries" height="200px" width="100%" />
        </Grid>
        : null}
      <Grid item xs={12} md={3}>
        <StockSearch elevation={stocks.length ? 1 : 16} />
      </Grid>
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <StockDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
