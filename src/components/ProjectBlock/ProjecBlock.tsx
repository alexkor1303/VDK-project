"use client";
//styles & module
import React from "react";
import style from "./ProjecBlock.module.scss";
import cn from "classnames";

//icons
import { IoMdInformationCircleOutline } from "react-icons/io";

//props
interface ProjectElemProps {
  id: number;
  name: string;
  costPrice: number;
  manager: string;
  dateStart: string;
  dateEnd: string;
  days: number;
  personalHours: number;
  extraInfo: {
    personal: number;
    profession: {
      svarka?: number;
      painter?: number;
      chpuOperator?: number;
      gravirovka?: number;
    };
  };
}

//component
export const ProjectElem = (project: ProjectElemProps) => {
  const [active, setActive] = React.useState(false);
  return (
    <div className={style.wrapper}>
      <div className={style.projectBlock}>
        <section
          className={cn(style.projectMainInfo, {
            [style.activeMainInfo]: active,
          })}>
          <p>{project.name}</p>
          <section className={style.rightSide}>
            <p>{project.dateEnd}</p>
            <IoMdInformationCircleOutline
              className={style.infoIcon}
              onClick={() => setActive(!active)}
            />
          </section>
        </section>
        {active && (
          <section className={style.description}>
            <ul>
              <li>Руководитель проекта : {project.manager}</li>
              <li>
                Итоговая себестоимость : {project.costPrice} руб. Длительность
              </li>
              <li>работы над проектом : {project.days} дней.</li>
              <li>
                Рабочих задействовано : {project.extraInfo.personal} человек.
              </li>
              <li>Человеко-часов затрачено : {project.personalHours} часов.</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
