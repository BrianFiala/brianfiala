import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './header.scss'

export default function Header() {
  return (
    <header class={style.header}>
      <nav>
        <Link activeClassName={style.active} href="/">Home</Link>
        <Link activeClassName={style.active} href="/profile/Brian Fiala">Brian</Link>
        <Link activeClassName={style.active} href="/profile/Zoya Liu">Zoya</Link>
        <Link activeClassName={style.active} href="/demos">Demos</Link>
      </nav>
    </header>
  )
}
Header.displayName = 'Header'