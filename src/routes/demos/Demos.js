import { h, render } from 'preact'
import style from './demos.scss'
import Stocks from '../../components/stocks/Stocks'
import Weather from '../../components/weather/Weather'

export default function Demos() {  
  return (
    <div class={style.demos}>
      <Stocks />
      <Weather />
    </div>
  )
}
Demos.displayName = 'Demos'

