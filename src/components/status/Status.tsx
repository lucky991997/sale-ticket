import React, { Children, CSSProperties, ReactNode } from "react";

import "./status.scss";

type StatusProps = {
  variant: "open" | "end" | "coming";
  children: ReactNode;
  styles?: CSSProperties;
};

const Status = ({variant, children, styles} : StatusProps) => {
  return (
    <div className="test">
      <div className={`status status__${variant}` }>
        <span className={`status-dot status-dot__${variant}`}></span>
        <span className={`status-title status-title__${variant}`}>{children}</span>
      </div>
    </div>
  );
};

export default Status;
