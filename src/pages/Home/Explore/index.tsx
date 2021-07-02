import React, { FC } from "react";
import { Space } from "antd";
import {
  NavLink,
  Redirect,
  Switch,
  Route,
  RouteChildrenProps,
} from "react-router-dom";
import "./index.less";
import Events from "./Events";
import Recommend from "./Recommend";

const Explore: FC<RouteChildrenProps> = (props) => {
  const url = props.match?.url;

  return (
    <div className="explore-container">
      <div>
        <Space size={32}>
          <NavLink className="q-link" to={`${url}/events`}>
            关注
          </NavLink>
          <NavLink className="q-link" to={`${url}/recommend`}>
            推荐
          </NavLink>
          <Redirect to={`${url}/events`} />
        </Space>
      </div>
      <Switch>
        <Route path={`${url}/events`} component={Events} />
        <Route path={`${url}/recommend`} component={Recommend} />
      </Switch>
    </div>
  );
};

export default Explore;
