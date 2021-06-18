import React, { FC } from "react";
import { Space, Dropdown, Menu, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.less";

const Operation: FC = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">新建知识库</Menu.Item>
    </Menu>
  );

  return (
    <Space className="operation-container">
      <Dropdown overlay={menu}>
        <a href="/" className="link" onClick={(e) => e.preventDefault()}>
          <Space>
            <PlusCircleOutlined
              style={{ color: "#25b864", fontSize: "18px" }}
            />
            <Typography.Text>新建</Typography.Text>
          </Space>
        </a>
      </Dropdown>
    </Space>
  );
};

export default Operation;
