import React, {useCallback, useState} from 'react'

import List from "./List";

const HookUseCallBack = () => {

   const [counter, setcounter] = useState(0)

   const getItemsFromDatabase = useCallback(() => {
      return ["a", "b", "c"];
   }, [])


  return (
    <div>
      <h1>useCallback</h1>
      <List getItems={getItemsFromDatabase} />
      <button onClick={() => setcounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  )
}

export default HookUseCallBack