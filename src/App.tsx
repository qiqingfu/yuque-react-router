import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { Alert } from "antd";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  return (
    <div>
      {/* <Alert message="用于学习 React 路由的实战项目" type="warning" closable /> */}
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/about" component={About}></Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
