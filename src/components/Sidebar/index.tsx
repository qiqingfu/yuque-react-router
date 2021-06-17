import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

interface IBarItem {
  id: number;
  title: string;
  to: string | { [prop: string]: any };
}

const Sidebar: FC = () => {
  const [barList, setBarList] = useState<IBarItem[]>([]);

  useEffect(() => {
    setBarList([
      { id: 1, title: "工作台", to: "/dashboard" },
      { id: 2, title: "小记", to: "/dashboard/notes" },
      { id: 3, title: "关注", to: "/dashboard/explore" },
      { id: 4, title: "收藏", to: "/dashboard/collections" },
      { id: 5, title: "知识库", to: "/dashboard/my_books" },
    ]);
  }, []);

  return (
    <div className="home-sidebar">
      <ul>
        {barList.map((bar) => {
          return (
            <li key={bar.id}>
              {bar.to === "/dashboard" ? (
                <NavLink exact to={bar.to} activeClassName="active">
                  {bar.title}
                </NavLink>
              ) : (
                <NavLink to={bar.to} activeClassName="active">
                  {bar.title}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
