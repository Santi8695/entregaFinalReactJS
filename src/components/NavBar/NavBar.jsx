import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <img src="/img/logoUrbanRituals.png" alt="Logo de Urban Rituals" />
      </Link>

      <nav>
        <ul>
         
          <li>
            <NavLink to="/categoria/Nike">Nike</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/Adidas">Adidas</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/Timberland">Timberland</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/NewBalance">New Balance</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/Bape">Bape</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/GoldenGoose">Golden Goose</NavLink>
          </li>

        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar