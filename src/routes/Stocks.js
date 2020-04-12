import MyResponsiveLine from '../components/ResponsiveLineGraph'
import { StockService } from '../api/StockService'
import { useState, useRef } from 'preact/hooks'
import {
  Button, Typography, Input,
  Paper, Grid, Table,
  TableHead, TableBody,
  TableRow, TableCell
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Title from '../components/Title'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))


export default function Stocks() {
  const symbolInput = useRef(null)
  const [stocks, setStocks] = useState([])
  const theme = useTheme()
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

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
        <Paper className={classes.paper}>
          <Title>Stock Card</Title><br />
          <Typography variant="h3">
              Welcome to stocks route
          </Typography><br />
          <Typography variant="body2">
              Fruitcake brownie donut dessert. Macaroon cotton candy dessert cookie jelly-o chocolate wafer sesame snaps. Icing sugar plum jelly jelly beans jujubes halvah jelly caramels jujubes. Carrot cake fruitcake sweet roll cookie. Jelly beans chocolate bar pie ice cream candy canes jelly-o sugar plum. Pastry gingerbread sweet roll chupa chups. Toffee lemon drops candy canes. Donut ice cream sweet roll pastry liquorice topping jelly-o. Pastry sugar plum dragée. Lemon drops chupa chups cheesecake sweet pastry fruitcake cookie cookie.
          </Typography>
          <Button size="large">OKAY</Button>
        </Paper>
      </Grid>

      {/* Symbol input item */}
      <Grid item xs={12} md={3}>
        <Paper elevation={8} className={classes.paper}>
          <Title>Lookup a stock</Title>
          <Input
            style={{ margin: '10px', padding: '5px' }}
            type="text"
            id="symbol-input"
            name="symbol"
            inputRef={symbolInput}
            placeholder="Enter a symbol"
          />
          <Button size="large" onClick={onSubmit}>fetch quote</Button>
        </Paper>
      </Grid>
      
      {/* Graph item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <MyResponsiveLine data={stocks} height="200px" width="400px" />
          </Paper>
        </Grid>
        : null }

      {/* Table item */}
      {stocks.length ?
        <Grid item xs={12} md={9}>
          <Paper className={fixedHeightPaper}>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        : null }
    </Grid>
  )
}
