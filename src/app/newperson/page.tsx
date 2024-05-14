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

//functions
const postFind = (name: string) => {
  let count = 0;
  PersonalDataExample.forEach((person) => {
    person.post === name ? count++ : (count += 0);
  });
  return count;
};

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
        <AddPersonForm title="Добавить сотрудника" />
      </ModalWindow>
      <div className={style.subHead}>
        <CreateTitle
          title="Добавить сотрудника"
          buttonClick={getModal}
          image="person"
        />
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
            <li>Общее Количество сотрудников : {PersonalDataExample.length}</li>
            <li>Количество Сварщиков : {postFind("svarka")}</li>
            <li>Количество Операторов ЧПУ : {postFind("chpuOperator")}</li>
            <li>Количество Слесарей : {postFind("laserboy")}</li>
            <li>Количество Маляров : {postFind("Painter")}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
