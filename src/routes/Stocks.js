import MyResponsiveLine from '../components/ResponsiveLineGraph'
import { StockService } from '../api/StockService'
import { useState, useRef } from 'preact/hooks'
import {
  Card, CardContent, CardActions, 
  Button, Typography, Input,
  TableContainer, Table,
  TableHead, TableBody,
  TableRow, TableCell, Grid
} from '@material-ui/core'

export default function Stocks() {
  const symbolInput = useRef(null)
  const [stocks, setStocks] = useState([])
  
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
      {/* Info Card */}
      <Grid item>
        <Card raised>
          <CardContent>
            <Typography variant="h6">
              Stocks card
            </Typography><br />
            <Typography variant="h3">
              Welcome to stocks route
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
              Price Timeseries
            </Typography>
            <Input
              style={{ margin: '10px', padding: '5px' }}
              type="text"
              id="symbol-input"
              name="symbol"
              inputRef={symbolInput}
              placeholder="Enter a symbol"
            />
          </CardContent>
          <CardActions>
            <Button size="large" onClick={onSubmit}>fetch quote</Button>
          </CardActions>
          <CardContent>
            {stocks.length ?
              <MyResponsiveLine data={stocks} height="40vh" width="calc(100vw - 72px)" />
              : null}
          </CardContent>
        </Card>
        <br />
        {stocks.length ?
          <Card raised>
            <CardContent>
              <TableContainer>
                <Table size="small" aria-label="stock info table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Symbol:</TableCell>
                      <TableCell align="right">Price:</TableCell>
                      <TableCell align="right">Open:</TableCell>
                      <TableCell align="right">Close:</TableCell>
                      <TableCell align="right">High:</TableCell>
                      <TableCell align="right">Low:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stocks.map((stock) => (
                      <TableRow key={stock.symbol}>
                        <TableCell component="th" scope="row">
                          {stock.symbol}
                        </TableCell>
                        <TableCell align="right">stock.pc.toFixed(2)</TableCell>
                        <TableCell align="right">stock.o.toFixed(2)</TableCell>
                        <TableCell align="right">stock.c.toFixed(2)</TableCell>
                        <TableCell align="right">stock.h.toFixed(2)</TableCell>
                        <TableCell align="right">stock.l.toFixed(2)</TableCell>
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
