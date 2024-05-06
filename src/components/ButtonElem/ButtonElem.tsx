import React from "react";

import style from "./ButtonElem.module.scss";

interface ButtonElemProps {
  children: React.ReactNode;
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
