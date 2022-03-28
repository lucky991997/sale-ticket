import React, { ComponentProps, CSSProperties, ReactNode } from "react";
import "./button.scss";

type ButtonProps = {
  variant: "primary" | "secondary";
  size: "XL" | "M";
  children: ReactNode;
  
} & ComponentProps<"button">;

const Button = ({ variant, children, size, ...rest }: ButtonProps) => {
  return (
    <button  className={`btn-${variant} btn-${size}`} {...rest}>
      <span >{children}</span>
    </button>
  );
};

export default Button;
