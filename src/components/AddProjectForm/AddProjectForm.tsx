"use client";
import { useState } from "react";

//data and types
import { Workertype } from "@/Types/Worker";
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";

//Components
import { ButtonElem } from "@/components";

//styles and icons
import { IoPersonAdd } from "react-icons/io5";
import style from "./AddProjectForm.module.scss";

//component
export const AddProjectForm = () => {
  ///hooks///

  const [workerList, setWorkerList] = useState<Workertype[]>([]);
  //select
  const [selectWorker, setSelectWorker] = useState("");
  const [selectTouched, setSelectTouched] = useState(false);
  const [selectError, setSelectError] = useState(
    "Выберите корректного сотрудника"
  );
  //input
  const [inputWorker, setInputWorker] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const [inputError, setInputError] = useState(
    "Введите корректное количество часов"
  );

  //handleFunctions
  const handleAddWorker = () => {
    setWorkerList([
      ...workerList,
      {
        name: selectWorker,
        hours: inputWorker,
      },
    ]);
    setSelectWorker("");
    setInputWorker("");
    //sum hours * salary
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectWorker(event.target.value);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWorker(event.target.value);
  };
  console.log(inputWorker);
  console.log(workerList);

  return (
    <div className={style.wrapper}>
      <form action={"#"} method="post" className={style.formWrapper}>
        <div className={style.formBlock}>
          <label htmlFor="projectName">Название проекта :</label>
          <input id="projectName" type="text" name="projectName" />
        </div>
        <div className={style.formBlock}>
          <label htmlFor="projectDirector">Руководитель проекта :</label>
          <input id="projectDirector" type="text" name="projectDirector" />
        </div>
        <div className={style.formBlock}>
          <label htmlFor="projectDirector">Дата старта проекта :</label>
          <input id="projectDirector" type="date" name="projectDirector" />
        </div>
        <div className={style.formBlock}>
          <label htmlFor="projectDirector">Дата окончания проекта :</label>
          <input id="projectDirector" type="date" name="projectDirector" />
        </div>
        <label
          htmlFor="
			workerList">
          Добавить сотрудника :
        </label>
        <div className={(style.formBlock, style.formBigBLock)}>
          <select
            name={`personName`}
            id="workerList"
            onChange={handleChangeSelect}>
            {PersonalDataExample.map((worker) => {
              return (
                <option
                  value={`${worker.surname}-${worker.name}`}
                  key={worker.id}>{`${worker.surname}-${worker.name}`}</option>
              );
            })}
          </select>
          <input
            type="text"
            id="workerList"
            onChange={handleChangeInput}
            value={inputWorker}
            placeholder="часов отработано... "
          />
          <ButtonElem handleEvent={handleAddWorker}>
            <IoPersonAdd fill="white" />
          </ButtonElem>
        </div>
        <p>Список сотрудников :</p>
        <section className={style.workerList}>
          <ul>
            {workerList.map((worker) => (
              <li key={worker.name}>
                Сотрудник :{worker.name} Часов :{worker.hours}
              </li>
            ))}
          </ul>
        </section>
        <ButtonElem type="submit" className={style.submitBtn}>
          Создать проект
        </ButtonElem>
      </form>
    </div>
  );
};
