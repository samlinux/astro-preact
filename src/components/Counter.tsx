import { h, Fragment } from 'preact';
import './Counter.css';

export default function Counter({ children, count }: { children: any, count: any }) {
	const add = () => count.value++;
	const subtract = () => count.value--;

	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	);
}