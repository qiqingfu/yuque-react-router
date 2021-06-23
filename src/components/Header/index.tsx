import React, { FC } from "react";
import { Row, Col } from "antd";
import Logo from "./Logo";
import Nav from "./Nav";
import Operation from "./Operation";
import Avatar from "./Avatar";
import FlexHeader from "src/components/Layout/FlexHeader";
import "./index.less";

const Header: FC = () => {
  return (
    <FlexHeader>
      <Row className="home-header-container">
        <Col span={2}>
          <Logo />
        </Col>
        <Col span={20} push={2}>
          <Row>
            <Col md={16} xs={0} sm={0}>
              <Nav />
            </Col>
            <Col md={8} xs={24} sm={24}>
              <div className="action-groups">
                <Operation />
                <Avatar />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </FlexHeader>
    // <div className="home-header-container">
    //   <Row className="wrapper">
    //     <Col span={2} offset={1}>
    //       <Logo />
    //     </Col>
    //     <Col span={21}>
    //       <Row className="nav">
    //         <Col offset={4} span={12}>
    //           <Nav />
    //         </Col>
    //         <Col span={4}>
    //           <Operation />
    //         </Col>
    //         <Col span={4}>
    //           <p>User</p>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default Header;
