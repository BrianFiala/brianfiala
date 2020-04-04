import { h, render } from 'preact';
import style from './home.scss'

export default function Home() {
  return (
	  <div class={style.home} />
  )
}
Home.displayName = 'Home'
