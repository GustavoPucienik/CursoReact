import { useState } from "react";

const ManageData = () => {
   let someData = 10;
   console.log(someData);
   const [number, setNumber] = useState(15);
   console.log(number)
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>botão</button>
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(25)}>mudar o state</button>
    </div>
    </div>
  )
}

export default ManageData