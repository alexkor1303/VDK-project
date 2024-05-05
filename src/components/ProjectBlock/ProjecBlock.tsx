"use client";
import React from "react";
import style from "./ProjecBlock.module.scss";
import cn from "classnames";

import { IoMdInformationCircleOutline } from "react-icons/io";

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
              <li>
                Руководитель проекта :
                <span className={style.importantInfo}> {project.manager}</span>
              </li>
              <li>
                Итоговая себестоимость :{" "}
                <span className={style.importantInfo}>
                  {project.costPrice} руб.
                </span>
              </li>
              <li>
                Длительность работы над проектом :{" "}
                <span className={style.importantInfo}>
                  {project.days} дней.
                </span>
              </li>
              <li>
                Рабочих задействовано :{" "}
                <span className={style.importantInfo}>
                  {project.extraInfo.personal} человек.
                </span>
              </li>
              <li>
                Человеко-часов затрачено :{" "}
                <span className={style.importantInfo}>
                  {project.personalHours} часов.
                </span>
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};
