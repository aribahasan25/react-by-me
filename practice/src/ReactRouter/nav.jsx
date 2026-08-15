 
import { NavLink } from "react-router-dom";
import About from "./about";
import Dashboard from "./dashboard";
import Home from "./home";


const Nav = () => {
  return (
   <>
   <li>
     <NavLink to="/">Home</NavLink>
   </li>
   <li>
     <NavLink to="/about">About</NavLink>
   </li>
   <li>
     <NavLink to="/dashboard">Dashboard</NavLink>
   </li>
   </>
  )
}

export default Nav