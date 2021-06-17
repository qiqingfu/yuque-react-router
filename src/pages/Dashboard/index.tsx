import React, { FC } from "react";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";
import Header from "src/components/Header";
import Sidebar from "src/components/Sidebar";
import Documents from "src/pages/Home/Documents";
import Notes from "src/pages/Home/Notes";
import Explore from "src/pages/Home/Explore";
import Collections from "src/pages/Home/Collections";
import MyBooks from "src/pages/Home/MyBooks";
import "./index.less";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <Row>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={20} className="content">
          <Switch>
            <Route exact path="/dashboard" component={Documents} />
            <Route path="/dashboard/notes" component={Notes} />
            <Route path="/dashboard/explore" component={Explore} />
            <Route path="/dashboard/collections" component={Collections} />
            <Route path="/dashboard/my_books" component={MyBooks} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
