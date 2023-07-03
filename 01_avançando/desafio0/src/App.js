import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Gustavo";
  const userName = useState("Maria");

  const cars = [
    { id: 1, brand: "Lamborghini", color: "Preto", newCar:true, km:0},
    { id: 1, brand: "Ferrari", color: "vermelho", newCar:false, km:500},
    { id: 1, brand: "Porsche", color: "Azul", newCar:false, km:1000}
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
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App;
