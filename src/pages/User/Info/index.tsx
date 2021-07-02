import React from "react";
import { Avatar, Card, Typography, Button } from "antd";
import { Link } from "react-router-dom";
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
      <div className="follows">
        <Link to="/" className="q-link">
          <p>
            <Typography.Title style={{ marginBottom: 0 }} level={3}>
              2
            </Typography.Title>
            <p>关注者</p>
          </p>
        </Link>
        <Link to="/" className="q-link">
          <p>
            <Typography.Title style={{ marginBottom: 0 }} level={3}>
              2
            </Typography.Title>
            <p>关注了</p>
          </p>
        </Link>
      </div>
      <div className="buttons">
        <Button block className="button">
          编辑资料
        </Button>
      </div>
    </Card>
  );
}
