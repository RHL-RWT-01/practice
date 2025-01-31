import React, { useEffect, useState } from "react";

function useLocalStorage(key, data=0) {
  const [count, setCount] = useState(parseInt(localStorage.getItem(key)));

  useEffect(() => {
    localStorage.setItem(key, data.toString());
  }, [data]);

  return { count, setCount };
}

export default useLocalStorage;
