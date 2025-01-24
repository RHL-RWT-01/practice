import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import FilterBooks from "./components/FilterBooks";
import { Provider } from "react-redux";
import { Store } from "./Store";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={Store}>
        <BookForm />
        <BookList />
        <FilterBooks />
      </Provider>
    </>
  );
}

export default App;
