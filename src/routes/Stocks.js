import { useState, useRef } from 'preact/hooks'
import MyResponsiveLine from '../components/ResponsiveLineGraph'
import Title from '../components/Title'
import InfoItem from '../components/InfoItem'
import { StockService } from '../api/StockService'
import message from '../assets/message.txt'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button, Input, Paper, Grid, Table, TableHead,
  TableBody, TableRow, TableCell } from '@material-ui/core'

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
  const symbolInput = useRef(null)
  const [stocks, setStocks] = useState([])
  const theme = useTheme()
  const classes = useStyles(theme)

  function transformStockTimeseries(symbol, stock) {
    let stockData = []
    for (let i = 0; i < stock.c.length; ++i) {
      stockData.push({
        x: (new Date(stock.t[i] * 1000)).toDateString(),
        y: stock.c[i]
      })
    }
    
    return {
      id: symbol,
      data: stockData
    }
  }
  
  async function onSubmit(event) {
    event.preventDefault()
    const symbol = symbolInput.current.value.toUpperCase()
    const duration = 'year'
    if (symbol) {
      const stock = await StockService.getStockTimeseries(symbol, duration)
      if (stock.s === 'ok') {
        setStocks([
          ...stocks,
          transformStockTimeseries(symbol, stock)
        ])
        symbolInput.current.value = ''
      }
    }
  }

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
          <Paper className={classes.paper}>
            <MyResponsiveLine data={stocks} height="200px" width="400px" />
          </Paper>
        </Grid>
        : null }

      {/* Symbol input item */}
      <Grid item xs={12} md={3}>
        <Paper elevation={stocks.length ? 1 : 8} className={classes.paper}>
          <Title>Lookup a stock</Title>
          <Input
            style={{ margin: '10px', padding: '5px' }}
            type="text"
            id="symbol-input"
            name="symbol"
            inputRef={symbolInput}
            placeholder="Enter a symbol" />
          <Button color="primary" size="large" onClick={onSubmit}>fetch quote</Button>
        </Paper>
      </Grid>

      {/* Table item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <Title>Stock details</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Open</TableCell>
                  <TableCell align="right">Close</TableCell>
                  <TableCell align="right">High</TableCell>
                  <TableCell align="right">Low</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stocks.map((stock) => (
                  <TableRow key={stock.symbol}>
                    <TableCell component="th" scope="row">
                      {stock.symbol}
                    </TableCell>
                    <TableCell align="right">stock.pc</TableCell>
                    <TableCell align="right">stock.o</TableCell>
                    <TableCell align="right">stock.c</TableCell>
                    <TableCell align="right">stock.h</TableCell>
                    <TableCell align="right">stock.l</TableCell>
                  </TableRow> ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        : null }
    </Grid>
  )
}
