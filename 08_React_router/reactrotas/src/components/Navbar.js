// 2 - links com react router
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return <nav>
      {/* <Link to="/" >Home</Link>
      <Link to="/about" >About</Link> */}
      <NavLink to="/" //</nav>className={({isActive}) => (isActive ? `Está ativo` : `Não está ativo`)} 
        >Home
      </NavLink>
      <NavLink to="/about" >About</NavLink>
    </nav>;
}

export default Navbar;