import { StockService } from '../api/StockService'
import { useRef } from 'preact/hooks'
import Title from './Title'
import { Button, Input } from '@material-ui/core'

export default function CitySearch({stocks, setStocks}) {
  const symbolInput = useRef(null)

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
    <>
      <Title>Lookup a stock</Title>
      <Input
        style={{ margin: '10px', padding: '5px' }}
        type="text"
        id="symbol-input"
        name="symbol"
        inputRef={symbolInput}
        placeholder="Enter a symbol" />
      <Button color="primary" size="large" onClick={onSubmit}>fetch quote</Button>
    </>
  )
}