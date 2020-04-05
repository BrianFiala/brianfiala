import { h } from 'preact'
import { useState, useRef } from 'preact/hooks'
import style from './stocks.scss'
import MyResponsiveLine from '../responsive-line-graph/ResponsiveLineGraph'
import { StockService } from '../../api/StockService'

export default function Stocks() {
  const symbolInput = useRef(null)
  const [stocks, setStocks] = useState([])

  function transformStock(symbol, stock) {
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
      const stock = await StockService.getStock(symbol, duration)
      if (stock.s === 'ok') {
        setStocks([
          ...stocks,
          transformStock(symbol, stock)
        ])
        symbolInput.current.value = ''
      }
    }
  }

  return (
    <div class={style.stocks}>
      {/* {stocks.length ?
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
          {stocks.map(stock => (
            <tr>
              <td>{stock.symbol}</td>
              <td />
              <td>{stock.pc.toFixed(2)}</td>
              <td>{stock.o.toFixed(2)}</td>
              <td>{stock.c.toFixed(2)}</td>
              <td>{stock.h.toFixed(2)}</td>
              <td>{stock.l.toFixed(2)}</td>
            </tr>
          ))}
        </table>
        : <p>Enter a ticker symbol to get a quote</p>
      }<br /> */}
      <form onSubmit={onSubmit}>
        <label style={{ margin: '10px' }} for="symbol">
          Enter a symbol:
        </label>
        <input
          style={{ margin: '10px', padding: '5px' }}
          type="text"
          id="symbol-input"
          name="symbol"
          ref={symbolInput} />
        <input
          style={{ margin: '10px', '-webkit-appearance': 'none' }}
          type="submit"
          value="fetch quote" />
      </form><br />
      {stocks.length ?
        <MyResponsiveLine data={stocks} height='500px' width='1000px' />
        : null}
    </div>
  )
}
Stocks.displayName = 'Stocks'
