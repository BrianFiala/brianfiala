import { h, render } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import style from './stocks.scss'
import MyResponsiveLine from '../../components/responsive-line-graph/MyResponsiveLine'
import data from '../../assets/sampleStockData'

export default function Stocks() {
  const symbolInput = useRef(null)
  const [inputSymbol, setInputSymbol] = useState('')
  const [stocks, setStocks] = useState([])
  const [stockRows, setStockRows] = useState()
  

  useEffect(async () => {
    if (inputSymbol) {
      const newStock = {
        symbol: inputSymbol,
        ...(await getStock(inputSymbol))
      }
      setStocks([...stocks, newStock])
      setInputSymbol('')
    }
  }, [inputSymbol])

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

  const getStock = async symbol => {
    const jsonPromise = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bq18qvfrh5refsdeb8hg`
    )
    //graph: `https://finnhub.io/api/v1/stock/candle?${symbol}=BMW.DE&resolution=60&from=${start}&to=${end}&token=bq18qvfrh5refsdeb8hg`
    return jsonPromise.json()
  }

  function onSubmit(event) {
    event.preventDefault()
    setInputSymbol(symbolInput.current.value)
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

  function transformStock(symbol, stockData) {
    let data = []

    if (stockData.c) {
      for (let i = 0; i < stockData.c.length; ++i) {
        data.push({
          x: (new Date(stockData.t[i] * 1000)).toDateString(),
          y: stockData.c[i]
        })
      }
    }

    return {
      id: symbol,
      data: [...data]
    }
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
          value={inputSymbol}
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

