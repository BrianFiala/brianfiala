import { h } from 'preact' /** @jsx h */
import { StockService } from '../api/StockService'
import { useRef } from 'preact/hooks'
import Title from './Title'
import { Button, Input } from '@material-ui/core'

export default function CitySearch({stocks, setStocks}) {
  const symbolInput = useRef(null)

  function transformStock(symbol, stock) {
    let stockTimeseries = []
    for (let i = 0; i < stock.timeseries.c.length; ++i) {
      stockTimeseries.push({
        x: (new Date(stock.timeseries.t[i] * 1000)).toDateString(),
        y: stock.timeseries.c[i]
      })
    }
    
    return {
      id: symbol,
      data: stockTimeseries,
      details: stock.details
    }
  }

  async function onSubmit(event) {
    event.preventDefault()
    const symbol = symbolInput.current.value.toUpperCase()
    const duration = 'year'
    if (symbol.length) {
      Promise.all([
        StockService.getStockDetails(symbol),
        StockService.getStockTimeseries(symbol, duration)
      ])
        .then((responses) => {
          if (responses.length === 2 && responses[0].pc
            && responses[1].s === 'ok' && responses[1].c.length) {
            setStocks([
              ...stocks,
              transformStock(symbol, {
                details: responses[0],
                timeseries: responses[1]
              })
            ])
            symbolInput.current.value = ''
          }
        })
        .catch(err => console.error('stock service error', err))
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