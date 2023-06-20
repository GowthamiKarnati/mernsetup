
import './App.css';
import {useState, useEffect } from "react";
import {getTest} from "./function/test";
function App() {
  const [data, setData] = useState("Hello world");
  useEffect(()=>{
  getTest()
  .then((res) => {
    setData(res.message);
  })
  .catch((err)=> console.log(err));
  }, [])
   return (
    <div className="App">
      <header className="App-header">
        <div>{data}</div>
      </header>
    </div>
  );
}

export default App;
