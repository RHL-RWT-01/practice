import React, { useEffect, useState } from "react";

function useLocalStorage(key, data=0) {
  const [count, setCount] = useState(data);
  const savedCount = parseInt(localStorage.getItem(key));

  useEffect(() => {
    localStorage.setItem(key, count.toString());
  }, [count]);

  return { savedCount, setCount };
}

export default useLocalStorage;
