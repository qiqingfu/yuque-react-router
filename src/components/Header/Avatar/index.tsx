import React from "react";
import { Avatar, Dropdown, Space, Menu, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";

export default function UserAvatar() {
  const menu = (
    <Menu style={{ width: "260px", height: "320px", overflow: "auto" }}>
      <Menu.Item key="1">
        <strong>123</strong>
      </Menu.Item>
      <Divider />
      <Menu.Item key="2">
        <div>456</div>
        <div>789</div>
      </Menu.Item>
      <Divider />
      <Menu.Item key="3">
        <div>101112</div>
        <div>131415</div>
      </Menu.Item>
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
