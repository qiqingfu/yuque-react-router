import React from "react";
import { Row, Col } from "antd";
import Info from "../Info";
import View from "../View";
import "./index.less";

export default function Main() {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <Row className="main-container-wider user-main-layout">
          <Col span={6}>
            <Info />
          </Col>
          <Col span={17} offset={1}>
            <View />
          </Col>
        </Row>
      </div>
    </div>
  );
}
