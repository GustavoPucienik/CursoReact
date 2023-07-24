import './App.css';
import React, { createContext } from 'react';

// 4 importação de components
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

import State from './components/State';
import Context from './components/Context';

// 8 - type
type textOrNulll = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

//9 - context
interface IAppContext {//I na frente e terminar com Context, padrão de contexto
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);//contexto precisa ser exportado para poder ser acessado

function App() {
  // 1 - variaveis
  const name: string = "Gustavo";
  const age: number = 30;
  const isDev: boolean = true;

  // 2 - funções
  const userGreeting = (name: string) : string => {
    return `Olá, ${name}!`
  }

  // 8 - types
  const myText: textOrNulll = "Tem algum texto aqui.";
  let mySecondText: textOrNulll = null;

  //mySecondText = "Opaa";
//  mySecondText = 12 // error


const testingFixed: fixed = "Isso"//se for outra string da erro, precisa ser os valores de fixed

// 9 - context
const contextValue: IAppContext = {
  language: "Javascript",
  framework: "Express",
  projects: 5,
};

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com react.js</h1>
      <h2>Nome: {name}</h2>
      <h3>Idade: {age}</h3>
      {isDev && (
      <div>
        <p>É um desenvolvedor</p>
      </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <FirstComponent/>
      <SecondComponent name={name}/>
      <Destructuring title="Primeiro post"
        content="Alguns conteudos"
        commentsQty={10}
        tags={["react", "javascript"]}
        category={Category.TS}
      />
      <State/>
      {myText && (
        <p>Tem texto na variável: myText</p>
      )}
      {mySecondText && (
        <p>Tem texto na variável: mySecondText</p>
      )}
    <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
