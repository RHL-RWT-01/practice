import React, { useEffect, useState } from 'react'

function useToggleItems (arr,pos=0) {
    const [items, setItems] = useState(arr);

    useEffect(()=>{
        setItems(arr);
    },[pos,arr]);

  return items[pos];
}

export default useToggleItems 