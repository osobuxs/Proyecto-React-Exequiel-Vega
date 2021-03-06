import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import GNR from "../../assets/pp.png";

function NavBar(props) {
  return (
    <div className="nav-container estilo">
      <Link to="/">
        <img className="estilo" src={process.env.PUBLIC_URL + GNR} alt="Logo Gnr" />
      </Link>
      <ul className="nav">
        <li>
          <NavLink
            to="/catalogo"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Catalogo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/SoftRock"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Soft Rock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/HardRock"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            Hard Rock
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
