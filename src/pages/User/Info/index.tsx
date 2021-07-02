import React from "react";
import { Avatar, Card, Typography } from "antd";
import "./index.less";

export default function Info() {
  return (
    <Card className="user-info-container">
      <div className="avatar">
        <Avatar
          style={{ width: "160px", height: "160px" }}
          size={"large"}
          src="https://avatars.githubusercontent.com/u/36329267?v=4"
        />
        <p>qiqf</p>
      </div>
    </Card>
  );
}
