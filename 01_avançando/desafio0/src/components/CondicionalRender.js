import React from 'react'
import { useState } from 'react';

const CondicionalRender = () => {

   const [x] = useState(false);

   const [name] = useState("João")

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If ternario</h1>
      {name === "João" ? (
         <div>
            <p>The name is joão</p>
         </div>
      ) : (
         <div>
            <p>Nome not found</p>
         </div>
      )}
    </div>
  )
}

export default CondicionalRender