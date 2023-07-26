import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
   <nav id='navbar'>
   <h2>
     <Link to="/"><BiCameraMovie/>Movies</Link>
   </h2>
   <form>
      <input type="text" placeholder='Busque um filme!'/>
      <button type='submit'>
         <BiSearchAlt2/>
      </button>
   </form>
     <Link to="/movie/1">Movie Lib</Link>
     <Link to="search">Search ovie</Link>
  </nav>
  )
}

export default Navbar