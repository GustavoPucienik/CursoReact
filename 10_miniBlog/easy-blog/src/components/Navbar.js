import { NavLink } from "react-router-dom";

import { useAuthentication} from '../hooks/useAuthentication';

import { useAuthValue } from "../context/AuthContext";

import styles from "./Navbar.module.css";

const Navbar = () => {
   const {user} = useAuthValue();

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
         {!user && (
         <>
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
         </>
         )}
         {user && (
            <>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/posts/create">
               Novo post
            </NavLink>
         </li>
         <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/dashboard">
               Dashboard
            </NavLink>
         </li>
         </>
         )}
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