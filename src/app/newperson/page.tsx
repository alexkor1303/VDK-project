"use client";
import { useState } from "react";

//data & style
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";
import style from "./page.module.scss";

//components & icons
import {
  LinkElem,
  CreateTitle,
  PersonalBlock,
  ModalWindow,
  AddPersonForm,
} from "@/components";

//page
export default function NewPerson() {
  //hooks
  const [openModal, setOpenModal] = useState(false);
  //functions
  function getModal() {
    setOpenModal(!openModal);
  }

  return (
    <div className={style.wrapper}>
      <ModalWindow state={openModal} closeModalWindow={getModal}>
        <AddPersonForm title="Создать бойца" />
      </ModalWindow>
      <div className={style.subHead}>
        <CreateTitle title="Добавить сотрудника" buttonClick={getModal} />
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
