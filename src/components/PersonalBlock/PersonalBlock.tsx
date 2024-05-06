"use client";

//styles & module
import style from "./PersonalBlock.module.scss";
import cn from "classnames";

//components & icons
import { IoPersonSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useState } from "react";

//Props
interface PersonalBlockProps {
  id: number;
  name: string;
  secondName: string;
  surname: string;
  post: string;
  salary: number;
}

//component
export const PersonalBlock = ({ ...data }: PersonalBlockProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className={cn(style.wrapper)}>
      <section className={cn(style.mainInfo, { [style.active]: active })}>
        <span className={style.leftSide}>
          <IoPersonSharp size={20} className={style.personalIcon} />
          <p>
            {data.surname} {data.name}
          </p>
        </span>
        <IoMdInformationCircleOutline
          size={20}
          onClick={() => setActive(!active)}
          className={style.infoIcon}
        />
      </section>
      <section
        className={cn(style.description, {
          [style.show]: active,
        })}>
        <p>{data.secondName}</p>
        <p>Должность : {data.post}</p>
        <p>Оплата : {data.salary}руб/ч</p>
      </section>
    </div>
  );
};
