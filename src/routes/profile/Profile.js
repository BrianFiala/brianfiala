import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './profile.scss';

export default (props) => {
	const [time, setTime] = useState(Date.now())
	const [count, setCount] = useState(10)

	function updateTime() { setTime(Date.now()) };
	function increment() { setCount(count + 1) };

	useEffect(() => {
		const timer = setInterval(updateTime, 1000);
		return () => { clearInterval(timer) }
	}, [])
	
	return (
		<div class={style.profile}>
			<h1>Profile: {props.user}</h1>
			<p>This is the user profile for a user named { props.user }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={increment}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>
	)
}
