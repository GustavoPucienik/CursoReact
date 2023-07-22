import React, { useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {
   const [number, setNumber] = useState(0);

   const premiumNumber = useMemo(() => {
      return ["0", "100", "200"];
   }, []);

   useEffect(() => {
      console.log("Premium number foi alterado!");
   },[premiumNumber]);

  return (
    <div>
      <h2>HookUseMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumber.includes(number) ? <p>Acertou o numero!</p> : ""}
      <hr />
    </div>
  )
}

export default HookUseMemo