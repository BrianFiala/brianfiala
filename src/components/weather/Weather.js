import { h } from 'preact';
import style from './weather.scss';

export default props => {
    const KEY = 'd4e4a060a1f951d7a177e5bdfc448049'
	return (
        <div class={style.weather}>
            Weather
        </div>
    )
}
