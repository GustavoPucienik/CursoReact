import './App.css';
import {useState, useEffect} from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const [name , setName] = useState("");
  const [price , setPrice] = useState("");

  // 1 - Resgatando dados
  useEffect( () => {
    async function fetchData(){
    const res = await fetch(url);

    const data = await res.json();

    setProducts(data);
    }
    fetchData();
    }, []);

    // 2 - add products
    const handleSubmit = async (e) => {
      e.preventDefault();

      const product = {
        name,
        price
      };

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      // 3 - carergamento dinamico
      const addedProduct = await res.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);

      setName("");
      setPrice("");
    };


  console.log(products);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} >{product.name} - R${product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="">
            Preço:
            <input type="text" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
