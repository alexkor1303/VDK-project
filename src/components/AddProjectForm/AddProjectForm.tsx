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
        salary: inputWorker,
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
        <section className={style.formMainInfo}>
          <label htmlFor="projectName">Название проекта :</label>
          <input id="projectName" type="text" name="projectName" />

          <label htmlFor="projectDirector">Руководитель проекта :</label>
          <input id="projectDirector" type="text" name="projectDirector" />

          <label htmlFor="projectDirector">Руководитель проекта :</label>
          <input id="projectDirector" type="text" name="projectDirector" />
        </section>
        <section className={style.formWorkerInfo}>
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
        </section>
        <ButtonElem handleEvent={handleAddWorker}>
          <IoPersonAdd fill="white" />
        </ButtonElem>
      </form>
      <section className={style.workerList}>
        <ul>
          {workerList.map((worker) => (
            <li key={worker.name}>{worker.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
