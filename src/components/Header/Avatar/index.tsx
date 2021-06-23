import React from "react";
import { Avatar, Dropdown, Space, Menu, Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";

export default function UserAvatar() {
  const menu = (
    <Menu style={{ width: "260px", overflow: "auto" }}>
      <Menu.Item key="1">个人主页</Menu.Item>
      <Menu.Item key="2">账户设置</Menu.Item>
      <Divider style={{ margin: 0 }} />
      <Menu.Item key="3">在企业中使用语雀</Menu.Item>
      <Divider style={{ margin: 0 }} />
      <Menu.Item key="4">下载桌面客户端</Menu.Item>
      <Menu.Item key="5">帮助文档</Menu.Item>
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
