import React, { ComponentProps, CSSProperties, ReactNode } from "react";
import { BsSearch } from "react-icons/bs";

import "./input.scss";
type InputProps = {
  inputType: "string" | "text";
  placeholder: string;
  children?: ReactNode;
  styles?: CSSProperties;
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

export { InputSearch };
