import { useState } from "react"

function App() {
  const [count, setCount] = useState(1);
  const handle = () => {
    setCount(count + 1)
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button onClick={handle}>Increase</button>
    </div>
  );
}

export default App;
