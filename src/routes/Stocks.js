import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import { Grid } from '@material-ui/core'
import MyResponsiveLine from '../components/ResponsiveLineGraph'
import StockDetailsTable from '../components/StockDetailsTable'
import StockSearch from '../components/StockSearch'
import InfoItem from '../components/InfoItem'
import message from '../assets/message.txt'

export default function Stocks() {
  const [stocks, setStocks] = useState([])
  
  return (
    <Grid container spacing={3}>
      {/* Info item */}
      <Grid item xs={12}>
        <InfoItem
          identifier="Stock Card"
          title="Welcome to stocks route"
          message={message} />
      </Grid>
      {/* Graph item */}
      {stocks.length ?
        <Grid item xs={12}>
          <MyResponsiveLine data={stocks} height="200px" width="400px" />
        </Grid>
        : null }
      {/* Symbol input item */}
      <Grid item xs={12} md={3}>
        <StockSearch stocks={stocks} setStocks={setStocks} elevation={stocks.length ? 1 : 16} />
      </Grid>
      {/* Table item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <StockDetailsTable stocks={stocks} />
        </Grid>
        : null }
    </Grid>
  )
}
