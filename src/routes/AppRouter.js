import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Content } from "../Components/Core";
import Welcome from "../Views/Welcome/Welcome";
import Books from "../Views/Books/Books"; 
import MyFavoriteBook from "../Views/MyFavoriteBook/Books";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Content>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/myfav" component={MyFavoriteBook} />
        </Switch>
      </Content>
    </Router>
  );
};

export default AppRouter;
