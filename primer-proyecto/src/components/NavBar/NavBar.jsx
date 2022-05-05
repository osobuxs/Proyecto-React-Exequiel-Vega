import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";
import { NavDropdown } from "react-bootstrap";
import GNR from "../../assets/GNR-LOGO.jpg";

function NavBar(props) {
  return (
    <div className="nav-container">
      <Link to="/inicio">
        <img src={GNR} alt="OMG Comics" />
      </Link>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
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
