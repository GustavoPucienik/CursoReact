
import './App.css';
import OutraLista from './components/OutraLista';

function App() {
    const meusItens = ["React", "Angular", "Vue"];

  return (

    <div className="App">
      <h1>Rendenização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  )
}

export default App;
