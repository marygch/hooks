import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <header className="header-section-other">
      <div class="container-fluid">
        <div class="logo"> Maria Garcia-CH</div>
        <div class="nav-menu">
          <nav class="main-menu mobile-menu">
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">
                  Configuraciones
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/books">
                  Hooks vs Class
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/myfav">
                  Custom Hooks
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
