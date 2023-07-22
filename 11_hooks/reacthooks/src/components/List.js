import React, {useState, useEffect} from 'react'

const List = ({getItems}) => {
   const [myItens, setMyItems] = useState([]);

   useEffect(() => {

      console.log("Buscando itens do DB...")

      setMyItems(getItems)

   }, [getItems])

  return (
    <div>
      {myItens.map((item) => (
         <p key={item}>{item}</p>
         ))}
    </div>
  )
}

export default List