import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Alert } from "antd";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/404";

function App() {
  return (
    <div>
      {/* <Alert message="用于学习 React 路由的实战项目" type="warning" closable /> */}
      <Switch>
        <Route
          path="/"
          exact
          children={({ history }) => {
            history.replace("/dashboard");
            return null;
          }}
        />
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/404" component={NotFound}></Route>
        <Route path="/:username" component={User} />
      </Switch>
    </div>
  );
}

export default App;
