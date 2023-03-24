import { useState } from "react";
import Content from "./Content";



//1. useEfffect (callback);
//2. useEfffect (callback,[]);
//3. useEfffect (callback,[deps]);

//-------------------

// 1. callback luôn được gọi sau khi conponent mounted
function App() {

  const [show,setShow]=useState(false);

  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={()=>setShow(!show)}>Toggle</button>
      {show && <Content/>}
        </div>
  );
}

export default App;
