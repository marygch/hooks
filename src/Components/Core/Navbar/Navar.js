import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import "./style.css";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Navbar = () => {
  return (
    <>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" exact to="/">Configuraciones</Menu.Item>
          <Menu.Item key="2" exact to="/hooks">Hooks vs Class</Menu.Item>
          <Menu.Item key="3" exact to="/customHook">Custom Hooks</Menu.Item>
        </Menu>
      </Header>
{/*
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
      */}
    </>
  );
};

export default Navbar;
