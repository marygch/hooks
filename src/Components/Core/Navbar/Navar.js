import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <header className="header-section-other">
      <div className="container-fluid">
        <div className="logo"> Maria Garcia-CH</div>
        <div className="nav-menu">
          <nav className="main-menu mobile-menu">
            <ul>
              <li>
                <NavLink activeClassName="active" exact to="/">
                  Configuraciones
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/hooks">
                  Hooks vs Class
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" exact to="/customHook">
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
