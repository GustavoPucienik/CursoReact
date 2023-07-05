import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Formulario</h2>
      <MyForm user={{name: "José", email: "jose@gmail.com", bio: "Sou um advogado", role: "editor"}} />
    </div>
  );
}

export default App;
