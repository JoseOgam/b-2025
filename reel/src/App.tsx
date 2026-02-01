import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => count + 1);
  };
  const subtract = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="card">
        <div> {count} </div>
        <div>
          <button onClick={add}>Add</button>
          <button onClick={reset}>reset</button>
          <button onClick={subtract}>subtract</button>
        </div>
      </div>
    </>
  );
}

export default App;
