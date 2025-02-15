import React, { useState } from "react";
import useLocalStorage from "./components/UseLocalStorage";
import useToggleItems from "./components/useToggleItems ";

function App() {
  const [name, setName] = useLocalStorage("username", "Rahul");
 const arr = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 const [idx,setIdx]=useState(0);
  const item = useToggleItems(arr,idx);
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Item: {item}</h1>
      <input onChange={(e)=>setIdx(e.target.value)} placeholder="Enter Index between 1 and 25"></input>
      
    </div>
  );
}

export default App;
