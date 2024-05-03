"use client";
import { LinkElem, ButtonElem } from "@/components";
import { IoPersonAdd } from "react-icons/io5";

import style from "./page.module.scss";
const hello = () => {
  console.log("hello");
};
export default function newPerson() {
  return (
    <div className={style.wrapper}>
      <div className={style.subHead}>
        <section className={style.createSection}>
          <h1>Добавить сотрудника</h1>
          <ButtonElem handleEvent={hello}>
            <IoPersonAdd
              className={style.createIcon}
              fill={`var(--orange)`}
              size={15}
            />
          </ButtonElem>
        </section>
        <LinkElem href="/" text="go back" />
      </div>
      <div className={style.mainContent}>
        <section className={style.listSection}>
          <p className={style.sectionTitle}>LIST SECTION</p>
          <div className={style.listContent}>
            <p>sasha</p>
            <p>vasya</p>
            <p>petya</p>
            <p>nikita</p>
          </div>
        </section>
        <section className={style.statisticSection}>
          <p className={style.sectionTitle}>STATISTIC SECTION</p>
          <ul>
            <li>Общее Количество сотрудников : N</li>
            <li>Количество Сварщиков : N</li>
            <li>Количество Операторов ЧПУ : N</li>
            <li>Количество Слесарей : N</li>
            <li>Количество Маляров : N</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
