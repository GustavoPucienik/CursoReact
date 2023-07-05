import './App.css';
import Car from './components/Car';

function App() {
  const cars = [
    { id: 1, name: "Lamborghini", color: "Preto", newCar:true, km:0},
    { id: 2, name: "Ferrari", color: "vermelho", newCar:false, km:500},
    { id: 3, name: "Porsche", color: "Azul", newCar:false, km:1000}
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car_container">
        {cars.map( (car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
