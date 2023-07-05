import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from "react";
import Title from './components/Title';

function App() {
  let n = 11;
  const [name] = useState("Gustavo");
  let redTitle = !true;
  return (
    <div className="App">
    <h1>Titulo com css global</h1>
      <MyComponent/>
      <MyComponent/>
      {/* inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
      Este elemento foi estilizado de forma inline</p>
      {/* CSS inline dinamico */}
      <h2 style={n > 10 ? { color: "purple", backgroundColor: "pink"} : { color: "blue", backgroundColor: "aqua"}} >
        CSS Dinamico
      </h2>
      <h2 style={n <  10 ? { color: "purple", backgroundColor: "pink"} : { color: "blue", backgroundColor: "aqua"}} >
        CSS Dinamico
      </h2>
      <h2 style={name === "Gustavo" ? { color: "green", backgroundColor: "gray"} : { color: "blue", backgroundColor: "aqua"}}>
        Gustavo
      </h2>
      {/* Classe dinamica */}
      <h2 className={redTitle? "red-title" : "title" } >Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title/>
      <h2 className='my_title' >teste</h2>
    </div>
  );
}

export default App;
