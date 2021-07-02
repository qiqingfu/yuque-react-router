import React, { FC } from "react";
import { ILayoutProps } from "@/types/index";
import "./index.less";

interface IFlexHeaderProps extends ILayoutProps {}

const FlexHeader: FC<IFlexHeaderProps> = ({ children, layout = "spread" }) => {
  return (
    <div className="flex-header-container">
      <div className={layout}>{children}</div>
    </div>
  );
};

export default FlexHeader;
