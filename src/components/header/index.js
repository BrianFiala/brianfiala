import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Brian Fiala's Page</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/profile/Brian Fiala">Brian</Link>
			<Link activeClassName={style.active} href="/profile/Zoya Liu">Zoya</Link>
		</nav>
	</header>
);

export default Header;
