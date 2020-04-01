import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import style from './stocks.scss';

export default (props) => {
    const symbolInput = useRef(null)
	const [inputSymbol, setInputSymbol] = useState('')
	const [stocks, setStocks] = useState([])
	const [stockRows, setStockRows] = useState()
	
	useEffect(async () => {
        if (inputSymbol) {
            const newStock = {symbol: inputSymbol, ...await getStock(inputSymbol)}
			setStocks([...stocks, newStock])
			setInputSymbol('')
		}
	}, [inputSymbol])
	
	useEffect(() => {
        if (stocks.length) {
            setStockRows(stocks.map(stock => 
				<tr>
					<td>{stock.symbol}</td>
					<td></td>
					<td>{stock.pc.toFixed(2)}</td>
					<td>{stock.o.toFixed(2)}</td>
					<td>{stock.c.toFixed(2)}</td>
					<td>{stock.h.toFixed(2)}</td>
					<td>{stock.l.toFixed(2)}</td>
				</tr>
			))
		}
	}, [stocks])
	
    const getStock = async (symbol) => {
        const jsonPromise = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bq18qvfrh5refsdeb8hg`)
        return jsonPromise.json()
    }

	function onSubmit(event) {
		event.preventDefault();
		setInputSymbol(symbolInput.current.value)
	}

	function generateStockTable() {
		return stocks.length
		? <table>
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
		: <p>Enter a ticker symbol to get a quote</p>
	}

	return (
		<div class={style.stocks}>
			{generateStockTable()}<br/>
			<form onSubmit={onSubmit}>
				<label style={{margin: '10px'}} for="symbol">Enter a symbol:</label>
				<input style={{margin: '10px', padding: '5px'}} type="text" id="symbol-input" name="symbol" ref={symbolInput} value={inputSymbol}/>
				<input style={{margin: '10px'}} type="submit" value="fetch quote"/>
			</form>
		</div>
	)
}
