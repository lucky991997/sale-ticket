import React, { CSSProperties, ReactChild, ReactNode } from "react";

import "./box.scss";

type BoxProps = {
  children: ReactNode;
  styles?: CSSProperties;
};

const Box = ({ styles, children }: BoxProps) => {
  return (
    <div style={styles} className="box">
      <span className="box-title">{children}</span>
    </div>
  );
};

export default Box;
