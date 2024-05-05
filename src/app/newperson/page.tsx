"use client";
import { useState } from "react";
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";
import { LinkElem, ButtonElem, PersonalBlock, ModalWindow } from "@/components";
import { IoPersonAdd } from "react-icons/io5";

import style from "./page.module.scss";

export default function NewPerson() {
  const [openModal, setOpenModal] = useState(false);

  function сloseModalWindow() {
    setOpenModal(false);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.subHead}>
        <section className={style.createSection}>
          <h1>Добавить сотрудника</h1>
          <ButtonElem handleEvent={() => setOpenModal(true)}>
            <IoPersonAdd
              className={style.createIcon}
              fill={`var(--orange)`}
              size={15}
            />
          </ButtonElem>
          <ModalWindow state={openModal} closeModalWindow={сloseModalWindow}>
            text
          </ModalWindow>
        </section>
        <LinkElem href="/" text="go back" />
      </div>
      <div className={style.mainContent}>
        <section className={style.listSection}>
          <p className={style.sectionTitle}>Список сотрудников :</p>
          <div className={style.listContent}>
            {PersonalDataExample.map((person) => {
              return <PersonalBlock key={person.id} {...person} />;
            })}
          </div>
        </section>
        <section className={style.statisticSection}>
          <p className={style.sectionTitle}>Статистика сотрудников :</p>
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
