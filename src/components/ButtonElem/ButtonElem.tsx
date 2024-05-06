import React from "react";

import style from "./ButtonElem.module.scss";
import cn from "classnames";
interface ButtonElemProps {
  className?: string;
  children: React.ReactNode;
  handleEvent?: () => void;
}
export const ButtonElem = ({
  handleEvent,
  children,
  className,
}: ButtonElemProps): JSX.Element => {
  return (
    <button
      className={cn(style.button, className ? className : "")}
      onClick={handleEvent}>
      {children}
    </button>
  );
};
