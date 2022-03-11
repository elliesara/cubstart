import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Counter } from './Counter';

function App() {
  const [background, setBackground] = useState("green");

  return (
    <div style = {{backgroundColor: background}} className="App">
      <Counter fn = {setBackground}/>
      <Counter fn = {setBackground}/>
    </div>
  );
}

export default App;
