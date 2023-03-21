import { useState } from "react"


const gifts = [

  "cpu i9",
  "Ram 32G RGB",
  "RGB Keybroad"
]

function App() {
  const [gift, setGift] = useState()
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{gift || `Chưa có phần thưởng`} </h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default App;
