import React, { ReactNode } from "react";
import style from "./ButtonElem.module.scss";
import cn from "classnames";
interface ButtonElemProps {
  children: ReactNode;
  handleEvent?: () => void;
}
export const ButtonElem = ({
  handleEvent,
  children,
}: ButtonElemProps): JSX.Element => {
  return (
    <button className={style.button} onClick={handleEvent}>
      {children}
    </button>
  );
};
