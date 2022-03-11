import { useEffect } from 'react';
import { useState } from 'react';

export function Counter({ fn }) {
	const [count, setCount] = useState(0);
  
	useEffect(() => {
		if (count % 5 === 0) {
			fn("red");
		} else {
			fn("green");
		}
	})

	return (
	  <div className="App">
		<p>You clicked {count} times</p>
		<button onClick = {() => setCount(count + 1)}>Click me!</button>
	  </div>
	);
  }

  export default Counter;