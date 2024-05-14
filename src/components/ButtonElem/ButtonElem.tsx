import React from "react";

import style from "./ButtonElem.module.scss";
import cn from "classnames";
interface ButtonElemProps {
  className?: string;
  children: React.ReactNode;
  handleEvent?: () => void;
  type?: "submit" | "button";
}
export const ButtonElem = ({
  handleEvent,
  children,
  className,
  type = "button",
}: ButtonElemProps): JSX.Element => {
  return (
    <button
      type={type}
      className={cn(style.button, className ? className : "")}
      onClick={handleEvent}>
      {children}
    </button>
  );
};
