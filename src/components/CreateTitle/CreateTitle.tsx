import { ButtonElem } from "@/components";
import { IoPersonAdd } from "react-icons/io5";
import style from "./CreateTitle.module.scss";

interface CreateTitleProps {
  title: string;
  buttonClick: () => void;
}

export const CreateTitle = ({ title, buttonClick }: CreateTitleProps) => {
  return (
    <div className={style.wrapper}>
      <p>{title}</p>
      <ButtonElem handleEvent={buttonClick}>
        <IoPersonAdd
          className={style.createIcon}
          fill={`var(--orange)`}
          size={15}
        />
      </ButtonElem>
    </div>
  );
};
