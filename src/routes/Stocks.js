import {h} from 'preact' /** @jsx h */
import {useStore} from '../api/StoreProvider'
import message from '../assets/message.txt'
import MyStockGraph from '../components/stocks/MyStockGraph'
import StockDetailsTable from '../components/stocks/StockDetailsTable'
import StockSearch from '../components/stocks/StockSearch'
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
          <MyStockGraph />
        </Grid>
        : null}
      <Grid item xs={12} md={3}>
        <StockSearch />
      </Grid>
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <StockDetailsTable />
        </Grid>
        : null}
    </Grid>
  )
}
