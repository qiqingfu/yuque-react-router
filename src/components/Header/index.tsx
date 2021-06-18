import React, { FC } from "react";
import { Row, Col } from "antd";
import Logo from "./Logo";
import Nav from "./Nav";
import Operation from "./Operation";
import "./index.less";

const Header: FC = () => {
  return (
    <div className="home-header-container">
      <Row>
        <Col span={2} offset={1}>
          <Logo />
        </Col>
        <Col span={21}>
          <Row className="nav">
            <Col offset={4} span={16}>
              <Nav />
            </Col>
            <Col span={4}>
              <Operation />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
