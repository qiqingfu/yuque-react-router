import React, { FC } from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

const Logo: FC = () => {
  return (
    <Space className="logo-container">
      <Link to="/dashboard">
        <img
          className="logo"
          src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*OwZWQ68zSTMAAAAAAAAAAABkARQnAQ"
          alt=""
        />
      </Link>
    </Space>
  );
};

export default Logo;
