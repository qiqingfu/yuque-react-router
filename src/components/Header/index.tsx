import React, { FC } from "react";
import { Row, Col, Space, Tag } from "antd";
import { NavLink } from "react-router-dom";
import "./index.less";

const Header: FC = () => {
  return (
    <div className="home-header-container">
      <Row>
        <Col span={2} offset={1}>
          语雀
        </Col>
        <Col span={21}>
          <Row className="nav">
            <Col offset={4}>
              <Space size={34}>
                <NavLink className="a-link" to="/dashboard">
                  首页
                </NavLink>
                <NavLink className="a-link" to="/r">
                  <Space size={2}>
                    空间<Tag color="#87d068">暂无配置</Tag>
                  </Space>
                </NavLink>
                <NavLink className="a-link" to="/about">
                  帮助
                </NavLink>
                <NavLink className="a-link" to="/yuque">
                  <Space size={2}>
                    反馈<Tag color="#87d068">暂无配置</Tag>
                  </Space>
                </NavLink>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
