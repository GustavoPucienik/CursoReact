import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand}  to="/">
         Good <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/">
               Home
            </NavLink>
         </li>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/login">
               Login
            </NavLink>
         </li>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/register">
               Cadastrar
            </NavLink>
         </li>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/about">
               Sobre
            </NavLink>
         </li>
      </ul>
    </nav>
  )
}

export default Navbar