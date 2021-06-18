import React, { FC, CSSProperties } from "react";
import { Space, Dropdown, Menu, Typography } from "antd";
import { PlusCircleOutlined, BellOutlined } from "@ant-design/icons";
import "./index.less";

const menuStyle: CSSProperties = {
  paddingTop: "6px",
  paddingBottom: "6px",
};

const Operation: FC = () => {
  const menu = (
    <Menu style={menuStyle}>
      <Menu.Item key="1">新建知识库</Menu.Item>
      <Menu.Item key="2">新建知识小组</Menu.Item>
    </Menu>
  );

  return (
    <Space
      className="operation-container"
      size={24}
      style={{ verticalAlign: "middle" }}
    >
      <Dropdown overlay={menu} arrow placement="topRight">
        <a href="/" className="link" onClick={(e) => e.preventDefault()}>
          <Space>
            <PlusCircleOutlined
              style={{ color: "#25b864", fontSize: "18px" }}
            />
            <Typography.Text type="secondary">新建</Typography.Text>
          </Space>
        </a>
      </Dropdown>
      <a href="/" className="link" onClick={(e) => e.preventDefault()}>
        <BellOutlined style={{ fontSize: "16px" }} />
      </a>
    </Space>
  );
};

export default Operation;
