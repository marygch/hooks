import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../Components/Core";
import Welcome from "../Views/Welcome/Welcome";
import HooksView from "../Views/Hooks";
import CustomHook from "../Views/CustomHook";
import style from './style.css';

const { Header, Content, Footer, Sider } = Layout;

export const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/hooks" component={HooksView} />
            <Route exact path="/customHook" component={CustomHook} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default AppRouter;
