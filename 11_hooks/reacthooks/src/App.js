import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { HookUseContext } from './components/HookUseContext';

// paginas
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    <HookUseContext>
    <h1>React Routes</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </HookUseContext>
    </div>
  );
}

export default App;
