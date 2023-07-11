//import {useContext} from 'react';
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from '../components/ChangeCounter';

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

//5 - context mais complexo
import { useTtileColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
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
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do context */}
      <ChangeCounter/>
      {/* 6 - alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
      </div>
    </div>
  )
}

export default Home;