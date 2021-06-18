import React, { FC } from "react";
import { Space, Tag } from "antd";
import { NavLink } from "react-router-dom";
import "./index.less";

const Nav: FC = () => {
  return (
    <Space size={34} className="nav-container">
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
  );
};

export default Nav;
