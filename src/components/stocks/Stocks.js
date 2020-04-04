import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import style from './stocks.scss'
import MyResponsiveLine from '../responsive-line-graph/ResponsiveLineGraph'
import data from '../../assets/sampleStockData'
import { StockService } from '../../api/StockService'

export default function Stocks() {
  const symbolInput = useRef(null)
  const [stockRows, setStockRows] = useState()
  const [stocks, setStocks] = useState([])
  
  useEffect(() => {
    if (stocks.length) {
      setStockRows(
        stocks.map(stock => (
          <tr>
            <td>{stock.symbol}</td>
            <td />
            <td>{stock.pc.toFixed(2)}</td>
            <td>{stock.o.toFixed(2)}</td>
            <td>{stock.c.toFixed(2)}</td>
            <td>{stock.h.toFixed(2)}</td>
            <td>{stock.l.toFixed(2)}</td>
          </tr>
        ))
      )
    }
  }, [stocks])

  async function onSubmit(event) {
    event.preventDefault()
    if (symbolInput.current.value) {
      setStocks([...stocks, {
        symbol: symbolInput.current.value,
        ...await StockService.getStock(symbolInput.current.value)
      }])
    }
    symbolInput.current.value = ''
  }

  function generateStockTable() {
    return stocks.length ? (
      <table>
        <tr>
          <td>Symbol:</td>
          <td>Name:</td>
          <td>Current:</td>
          <td>Opening:</td>
          <td>Closing:</td>
          <td>High:</td>
          <td>Low:</td>
        </tr>
        {stockRows}
      </table>
    ) : (
      <p>Enter a ticker symbol to get a quote</p>
    )
  }

  return (
    <div class={style.stocks}>
      {generateStockTable()}
      <br />
      <form onSubmit={onSubmit}>
        <label style={{ margin: '10px' }} for="symbol">
          Enter a symbol:
        </label>
        <input
          style={{ margin: '10px', padding: '5px' }}
          type="text"
          id="symbol-input"
          name="symbol"
          ref={symbolInput}
        />
        <input
          style={{ margin: '10px', '-webkit-appearance': 'none' }}
          type="submit"
          value="fetch quote"
        />
      </form><br />
      <MyResponsiveLine data={data} areaBaselineValue={44.2} height='500px' width='500px' />
    </div>
  )
}
Stocks.displayName = 'Stocks'

