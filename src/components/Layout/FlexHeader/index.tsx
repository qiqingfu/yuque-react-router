import React, { FC } from "react";
import "./index.less";

interface IFlexHeaderProps {
  layout?: "center" | "spread";
}

const FlexHeader: FC<IFlexHeaderProps> = ({ children, layout = "spread" }) => {
  return (
    <div className="flex-header-container">
      <div className={layout}>{children}</div>
    </div>
  );
};

export default FlexHeader;
