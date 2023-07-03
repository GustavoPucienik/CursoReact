// components
import FirstComponents from './components/firstComponents';
import TemplateExpression from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Event from './components/Events';
import Challenge from './components/Challenge';

// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="titulo">h1</h1>
      <FirstComponents/>
      <TemplateExpression/>
      <MyComponent/>
      <Event/>
      <Challenge/>
    </div>
  );
}

export default App;
