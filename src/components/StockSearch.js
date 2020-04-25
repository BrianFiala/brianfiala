import {h} from 'preact' /** @jsx h */
import {useRef} from 'preact/hooks'
import {useStore} from '../api/StateProvider'
import {StockService} from '../api/StockService'
import Title from './Title'
import MyPaper from './MyPaper'
import {Button, Input} from '@material-ui/core'

function transformStock(symbol, newStockInfo) {
  const stock = {
    details: newStockInfo[0],
    timeseries: newStockInfo[1]
  }
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

function fecthData(symbol, duration) {
  return Promise.all([
    StockService.getStockDetails(symbol),
    StockService.getStockTimeseries(symbol, duration)
  ])
}

function newDataIsValid(newStockInfo) {
  return newStockInfo.length === 2 && newStockInfo[0].pc
  && newStockInfo[1].s === 'ok' && newStockInfo[1].c.length
}

function mergedStockInfo(symbol, newStockInfo, stocks) {
  const newStock = transformStock(symbol, newStockInfo)
  const newStocks = [...stocks]
  let alreadyHasStock = false
  for (let i = 0; i < newStocks.length; ++i) {
    if (newStocks[i].id === symbol) {
      newStocks[i] = newStock
      alreadyHasStock = true
      break
    }
  }
  if (!alreadyHasStock) {
    newStocks.push(newStock)
  }

  return newStocks
}

export default function StockSearch({elevation}) {
  const {stocks, setStocks} = useStore()
  const symbolInput = useRef(null)

  async function onSubmit(event) {
    event.preventDefault()
    const symbol = symbolInput.current.value.toUpperCase()
    if (symbol.length) {
      const duration = 'year'
      fecthData(symbol, duration)
        .then(newStockInfo => {
          if (newDataIsValid(newStockInfo)) {
            setStocks(mergedStockInfo(symbol, newStockInfo, stocks))
            symbolInput.current.value = ''
          }
        })
        .catch(err => console.error('stock service error', err))
    }
  }
  
  return (
    <MyPaper elevation={elevation}>
      <Title>Lookup a stock</Title>
      <Input
        style={{margin: '10px', padding: '5px' }}
        type="text"
        id="symbol-input"
        name="symbol"
        inputRef={symbolInput}
        placeholder="Enter a symbol" />
      <Button color="primary" size="large" onClick={onSubmit}>fetch quote</Button>
    </MyPaper>
  )
}