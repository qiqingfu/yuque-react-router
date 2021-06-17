import React, { FC } from "react";
import Header from "src/components/Header";
import "./index.less";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content">Content</div>
    </div>
  );
};

export default Dashboard;
