import React from "react";
import style from "./ModalWindow.module.scss";
import cn from "classnames";
import { ButtonElem } from "../index";
import { IoIosClose } from "react-icons/io";

interface ModalWindowProps {
  children: React.ReactNode;
  closeModalWindow: () => void;
  state: boolean;
}
export const ModalWindow = ({
  children,
  state,
  closeModalWindow,
}: ModalWindowProps) => {
  return (
    <div className={cn(style.background, { [style.open]: state === true })}>
      <div className={style.window}>
        {children}
        <ButtonElem handleEvent={closeModalWindow}>
          <IoIosClose fill="white" />
        </ButtonElem>
      </div>
    </div>
  );
};
