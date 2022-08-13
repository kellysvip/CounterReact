// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  return (
    <div class="container">
      <h1>Counter</h1>
      <span style={{ color }} id="value">
        {count}
      </span>
      <div class="btn-group">
        <button onClick={decrement} class="btn btn-decrease">
          DECREASE
        </button>
        <button onClick={reset} class="btn btn-reset">
          RESET
        </button>
        <button onClick={increment} class="btn btn-increase">
          INCREASE
        </button>
      </div>
    </div>
  );
};

export default App;
