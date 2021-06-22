import React from "react";
import { Avatar, Dropdown, Space, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";

export default function UserAvatar() {
  const menu = (
    <Menu style={{ width: "260px" }}>
      <Menu.Item key="1">123</Menu.Item>
      <Menu.Item key="2">456</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        arrow
        overlay={menu}
        placement="bottomRight"
        overlayStyle={{ top: "46px" }}
      >
        <Space style={{ cursor: "pointer" }}>
          <Avatar size="small">Q</Avatar>
          <DownOutlined style={{ fontSize: "10px", fontWeight: 600 }} />
        </Space>
      </Dropdown>
    </div>
  );
}
