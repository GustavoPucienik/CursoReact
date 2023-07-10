import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

// components
import Navbar from './components/Navbar';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
      <Navbar/>
      {/* 9 - search */}
      <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          {/* 4 - rota dinamica */}
          <Route path='/products/:id' element={<Product/>} />
          {/* 6 - nested route */}
          <Route path='/products/:id/info' element={<Info/>} />
          {/* 9 - search */}
          <Route path='/search' element={<Search/>}/>
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          {/* 7 - no match route */}
          <Route path='*' element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
