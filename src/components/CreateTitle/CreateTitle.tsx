import { ButtonElem } from "@/components";
import { IoPersonAdd } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import style from "./CreateTitle.module.scss";

interface CreateTitleProps {
  title: string;
  buttonClick: () => void;
  image: "person" | "project";
}

export const CreateTitle = ({
  title,
  buttonClick,
  image,
}: CreateTitleProps) => {
  return (
    <div className={style.wrapper}>
      <p>{title}</p>
      <ButtonElem handleEvent={buttonClick}>
        {image === "person" ? (
          <IoPersonAdd className={style.createIcon} fill="white" size={15} />
        ) : (
          <LiaFileInvoiceDollarSolid
            className={style.createIcon}
            fill="white"
            size={15}
          />
        )}
      </ButtonElem>
    </div>
  );
};
