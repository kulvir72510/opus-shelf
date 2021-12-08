import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./pages/home";
import PublicClass from "./pages/PublicClass";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/publicclass" component={PublicClass} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
