import React, { ChangeEvent, ComponentProps, CSSProperties, MouseEvent, ReactNode } from "react";
import { BsSearch } from "react-icons/bs";

import "./input.scss";
type InputProps = {
  inputType?: string | "text";
  type?: string | "text";
  placeholder: string;
  children?: ReactNode;
  styles?: CSSProperties;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & ComponentProps<"input">;

type InputIconProps = {
  type: string | "text";
  placeholder: string;
  children?: ReactNode;
  styles?: CSSProperties;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & ComponentProps<"input">;

const InputSearch = ({
  children,
  styles,
  placeholder,
  inputType,
  ...rest
}: InputProps) => {
  return (
    <>
      <div className="input-search">
        <input type={inputType} placeholder={placeholder} {...rest} />
        <button>
          {" "}
          {children}
          <BsSearch
            style={{
              width: "24px",
              height: "24px",
              color: "#1E0D03",
            }}
          />
        </button>
      </div>
    </>
  );
};

const Input = ({ styles, placeholder,  handleChange, type, ...rest }: InputProps) => {
  return (

    <input
      type={type}
      className="input"
      placeholder={placeholder}
      style={styles}
      onChange={handleChange}
      {...rest}
    />
  );
};

const InputIcon = ({
  styles,
  placeholder,
  type,
  children,
  handleClick,
  handleChange,
  ...rest
}: InputIconProps) => {
  return (
    <div className="input-icon">
      <input type={type} placeholder={placeholder} style={styles} {...rest}  onChange={handleChange}/>
      <button onClick={(event) => handleClick(event)}>{children}</button>
    </div>
  );
};
export { InputIcon, Input, InputSearch };
