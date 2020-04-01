import { h } from 'preact';
import style from './demos.scss';
import Stocks from '../../components/stocks/Stocks'
import Weather from '../../components/weather/Weather'

export default (props) => (
	<div class={style.demos}>
		<Stocks/>
		<Weather/>
	</div>
)
