import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../home";
import Cart from "../cart";
import Detail from "../detail";

const App:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect from="*" to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
