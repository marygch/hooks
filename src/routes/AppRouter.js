import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Content } from "../Components/Core";
import Welcome from "../Views/Welcome/Welcome";
import HooksView from "../Views/Hooks";
import CustomHook from "../Views/CustomHook";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Content>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/hooks" component={HooksView} />
          <Route exact path="/customHook" component={CustomHook} />
        </Switch>
      </Content>
    </Router>
  );
};

export default AppRouter;
