
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento'
import Pessoa from './components/Pessoa';

function App() {
    const nome = "Maria";

  return (

    <div className="App">
      <h1>Rendenização condicional</h1>
      <Condicional/>
      <Evento/>
      <Pessoa
      nome="Gustavo Gomes"
      idade="20"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />

    </div>
  )
}

export default App;
