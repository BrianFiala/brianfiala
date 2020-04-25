import {h} from 'preact' /** @jsx h */
import {useRef} from 'preact/hooks'
import {useStore} from '../api/StateProvider'
import {mergedStockInfo, newStockDataIsValid} from '../utils/StockUtils'
import StockService from '../api/StockService'
import Title from './Title'
import MyPaper from './MyPaper'
import {Button, Input} from '@material-ui/core'

export default function StockSearch({elevation}) {
  const {stocks, setStocks} = useStore()
  const symbolInput = useRef(null)

  async function onSubmit(event) {
    event.preventDefault()
    const symbol = symbolInput.current.value.toUpperCase()
    if (symbol.length) {
      const duration = 'year'
      StockService.fetchStockData(symbol, duration)
        .then(newStockInfo => {
          if (newStockDataIsValid(newStockInfo)) {
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