import { useState } from "react";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import User from "./components/User";
import { Store } from "./Redux/Store";
function App() {
  return (
    <>
      <Provider store={Store}>
        <User />
        <Counter />
      </Provider>
    </>
  );
}

export default App;
