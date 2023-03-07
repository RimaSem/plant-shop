import "./scss/Header.scss";
import logo from "../img/plant-shop-logo.png";
import { Link, NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiHeart } from "@mdi/js";

function Header() {
  return (
    <header>
      <Link to="/plant-shop/">
        <div className="logo-container">
          <img src={logo} />
          <div className="logo-title">GetPlants</div>
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/plant-shop/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/plant-shop/shop"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Shop
        </NavLink>
      </nav>
      <div className="header-icons">
        <NavLink
          to="/plant-shop/favorite"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <Icon className="header-icon" path={mdiHeart} />
        </NavLink>
        <Icon className="header-icon" path={mdiCartOutline} />
      </div>
    </header>
  );
}

export default Header;
