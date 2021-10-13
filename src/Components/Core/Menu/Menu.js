import React from "react";
import { Menu, } from 'antd';
const { SubMenu } = Menu;

const Sider = ({ handleClick }) => {
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" title="Primeros pasos">
        <Menu.ItemGroup key="g1" title="Hooks vs Clases">
          <Menu.Item key="l2" >Clases</Menu.Item>
          <Menu.Item key="l1" >Hooks</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Custom Hook">
          <Menu.Item key="l3" >Hook</Menu.Item>
        </Menu.ItemGroup> 
      </SubMenu>
      <SubMenu key="sub1" title="Optimizando">   
        <Menu.ItemGroup key="g1" title="Use useEffect">
          <Menu.Item key="l4" >Hook</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Color example">
          <Menu.Item key="l5" >Hook</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default Sider;
