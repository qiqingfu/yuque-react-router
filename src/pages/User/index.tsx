import React, { FC } from "react";
import { useParams, useHistory } from "react-router-dom";
import whiteList from "src/config/routeWhiteList";
import Header from "@/components/Header";

interface IParams {
  username: string;
}

const User: FC = () => {
  const { username } = useParams<IParams>();
  const history = useHistory();

  /**
   * 动态路由作为 router 的兜底路由
   * 当不存在该用户时, 直接导航到 404 页面
   */
  if (!whiteList.includes(username)) {
    history.replace("/404");
    return null;
  }

  return (
    <div>
      <Header layout="center" />
    </div>
  );
};

export default User;
