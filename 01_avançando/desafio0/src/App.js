import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = "Gustavo";
  const userName = useState("Maria");

  const cars = [
    { id: 1, brand: "Lamborghini", color: "Preto", newCar:true, km:0},
    { id: 2, brand: "Ferrari", color: "vermelho", newCar:false, km:500},
    { id: 3, brand: "Porsche", color: "Azul", newCar:false, km:1000}
  ];

  function showMessage(){
    console.log("Function")
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Gustavo", job: "Programador", age: 21},
    {id: 2, name: "Maria", job: "Manicure", age: 20},
    {id: 3, name: "Paula", job: "Arquiteta", age: 24},
    {id: 3, name: "Mario", job: "Estudante", age: 17}
  ];

  return (
    <div className="App">
      <h1>Avançando em react.js</h1>
      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Imagem aleatoria" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="imagem cidade" />
      </div>
      <ManageData/><br/>
      <ListRender/>
      <CondicionalRender/>
      {/* Props */}
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructing */}
      <CarDetails brand="VW" km={1000} color="Vermelho" newCar={false}/>
      {/* reaproveitar */}
      <CarDetails brand="Fiat" km={500} color="Vermelho" newCar={false} />
      <CarDetails brand="Ford" km={30} color="Branco" newCar={!false} />
      {/* loop em array de objetos */}
      <h1>Loop em array de objetos</h1>
      {cars.map( (car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} 
        km={car.km} newCar={car.newCar}/>
      ))}
      {/* Fragment */}
      <h1>Fragment</h1>
      <Fragment propFragment={"Teste"} />
      {/* children */}
      <h1>Children</h1>
      <Container myValue="teste">
        <p>Este é o conteudo</p>
      </Container>
      <Container myValue="teste 2">
        <p>Este é o container</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
      ))}
    </div>
  );
}

export default App;
