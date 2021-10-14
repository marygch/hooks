import React from "react";
import { Layout, Menu, Link } from 'antd';
import { NavLink } from "react-router-dom";
import "./style.css";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Navbar = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" ><NavLink exact to="/">Configuraciones</NavLink></Menu.Item>
        <Menu.Item key="2" ><NavLink exact to="/hooks">Hooks</NavLink></Menu.Item>
        <Menu.Item key="3" exact to="/customHook">Otros</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
