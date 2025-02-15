import React from "react";
import useLocalStorage from "./components/UseLocalStorage";


function App() {
  const [name, setName] = useLocalStorage("username", "Rahul");

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
