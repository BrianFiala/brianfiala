import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import MyResponsiveLine from '../components/ResponsiveLineGraph'
import InfoItem from '../components/InfoItem'
import StockDetailsTable from '../components/StockDetailsTable'
import StockSearch from '../components/StockSearch'
import message from '../assets/message.txt'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '100%'
  }
}))

export default function Stocks() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [stocks, setStocks] = useState([])
  
  return (
    <Grid container spacing={3}>
      {/* Info item */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <InfoItem
            identifier="Stock Card"
            title="Welcome to stocks route"
            message={message} />
        </Paper>
      </Grid>
      {/* Graph item */}
      {stocks.length ?
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <MyResponsiveLine data={stocks} height="200px" width="400px" />
          </Paper>
        </Grid>
        : null }
      {/* Symbol input item */}
      <Grid item xs={12} md={3}>
        <Paper elevation={stocks.length ? 1 : 8} className={classes.paper}>
          <StockSearch stocks={stocks} setStocks={setStocks} />
        </Paper>
      </Grid>
      {/* Table item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <StockDetailsTable stocks={stocks} />
          </Paper>
        </Grid>
        : null }
    </Grid>
  )
}
