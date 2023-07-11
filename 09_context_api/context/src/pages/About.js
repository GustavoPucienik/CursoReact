//import {useContext} from "react";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

//5 - context mais complexo
import { useTtileColorContext } from '../hooks/useTitleColorContext';

const About = () => {
   //const {counter} = useContext(CounterContext);
   const {counter} = useCounterContext();
   
  // 5 - contexto mais complexo
  const  {color, dispatch} = useTtileColorContext();
  
  // 6 - alterando states complexos
  const setTitleColor = (color) => {
    dispatch({type: color})
  }


  return (
    <div>
      <h1 style={{color:color}}>About</h1>
      <p>Valor do contador: {counter}</p>
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default About;