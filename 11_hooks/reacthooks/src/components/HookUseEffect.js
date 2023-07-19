import { useEffect, useState } from 'react'

const HookUseEffect = () => {
   // 1 - useEffect
   useEffect(() => {
      console.log("Estou sendo executado")
   }, []);

   const [number, setNumber] = useState(1);

   const changeSomething = () => setNumber(number +1);

   // 2 - array de deps
   useEffect( () => {
      console.log("Serei executado apenas uma vez!");
   }, []);

   // 3 - item no array de dependencias
   const [anotherNumber, setAnotherNumber] = useState(0);

   useEffect(() => {

      if (anotherNumber > 0) {
         console.log("Executado apenas quando a anotherNumber muda!",anotherNumber)
      }

   }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button><br />
      <p>AnotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber+1)}>Mudar anotherNumber!</button>
      <hr />
    </div>
  )
}

export default HookUseEffect