import React from "react";

//style & modules
import style from "./ModalWindow.module.scss";
import cn from "classnames";

//components & icon
import { ButtonElem } from "../index";
import { IoIosClose } from "react-icons/io";

//Props
interface ModalWindowProps {
  children: React.ReactNode;
  closeModalWindow: () => void;
  state: boolean;
}

//component
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
