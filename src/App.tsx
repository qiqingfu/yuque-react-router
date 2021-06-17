import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
