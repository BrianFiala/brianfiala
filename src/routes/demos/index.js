import { h, Component } from 'preact';
import style from './style';

const FINNHUB_API_KEY = 'bq18qvfrh5refsdeb8hg';

export default class Demos extends Component {
	state = {
		symbol: 'AAPL',
		stock: {}
	}

	async getStock(symbol) {
		const resp = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`)
		return await resp.json();
	}

	async onSubmit(event) {
		event.preventDefault();
		this.setState({
			symbol: event.target.value,
			stock: await this.getStock(event.target.value)
		})
	}

	async componentDidMount() {
		this.setState({stock: await this.getStock(this.state.symbol)})
	}

	componentWillUnmount() {}

	render() {
		return (
			<div class={style.demos}>
				<p>{this.state.symbol} stock price = {this.state.stock.pc}</p>
				<form onSubmit={this.onSubmit}>
					<label for="symbol">Enter a symbol</label><br/>
					<input type="text" id="symbol-input" name="symbol"/><br/>
					<input type="submit" value="fetch quote"/>
				</form>
			</div>
		)
	}
}
