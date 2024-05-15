"use client";
import { useState } from "react";

//data and types
import { Workertype } from "@/Types/worker";
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";

//Components
import { ButtonElem, Input } from "@/components";

//styles and icons
import { IoPersonAdd } from "react-icons/io5";
import style from "./AddProjectForm.module.scss";
import cn from "classnames";
//component
export const AddProjectForm = () => {
  ///hooks///
  const [projectName, setProjectName] = useState("");
  const [projectDirector, setProjectDirector] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  projectEndDate;
  const [workerList, setWorkerList] = useState<Workertype[]>([]);
  //select
  const [selectWorker, setSelectWorker] = useState({
    id: "",
    name: "",
    post: "",
    salary: "",
  });
  const [selectError, setSelectError] = useState(false);
  //input
  const [inputWorker, setInputWorker] = useState("");
  const [inputError, setInputError] = useState(false);

  //handleFunctions
  const handleAddWorker = () => {
    //inputChecker
    if (
      inputWorker === "" ||
      inputWorker.toLowerCase() !== inputWorker.toUpperCase() ||
      inputWorker === " "
    ) {
      setTimeout(() => setInputError(false), 300);
      setInputError(true);
    } else if (
      selectWorker.name === "" ||
      workerList.some((worker) => worker.id === selectWorker.id)
    ) {
      setTimeout(() => setSelectError(false), 300);
      setSelectError(true);
    } else {
      const itog = Math.floor(
        Number(selectWorker.salary) * Number(inputWorker)
      );

      setWorkerList([
        ...workerList,
        {
          id: selectWorker.id,
          name: selectWorker.name,
          post: selectWorker.post,
          salary: Number(selectWorker.salary),
          hours: Number(inputWorker),
          sum: itog,
        },
      ]);
    }
    setSelectWorker({
      id: "",
      name: "",
      post: "",
      salary: "",
    });
    setInputWorker("");
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const [surname, name, post, salary, id] = value.split("-");
    setSelectWorker({
      id: id,
      name: `${surname} ${name}`,
      post: post,
      salary: salary,
    });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputWorker(event.target.value);
  };

  const handleChangeProjectName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectName(event.target.value);
  };

  const handleChangeProjectDirector = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectDirector(event.target.value);
  };

  const handleChangeProjectStartDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectStartDate(event.target.value);
  };
  const handleChangeProjectEndDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectEndDate(event.target.value);
  };
  console.log(workerList);
  return (
    <div className={style.wrapper}>
      <form action={"#"} method="post" className={style.formWrapper}>
        <Input
          className={style.formBlock}
          description="Название проекта :"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={handleChangeProjectName}
        />
        <Input
          className={style.formBlock}
          description="Руководитель проекта :"
          id="projectDirector"
          name="projectDirector"
          value={projectDirector}
          onChange={handleChangeProjectDirector}
        />
        <Input
          className={style.formBlock}
          description="Дата старта проекта :"
          type="date"
          id="projectStartDate"
          name="projectStartDate"
          value={projectStartDate}
          onChange={handleChangeProjectStartDate}
        />
        <Input
          className={style.formBlock}
          description="Дата завершени проекта :"
          type="date"
          id="projectEndDate"
          name="projectEndDate"
          value={projectEndDate}
          onChange={handleChangeProjectEndDate}
        />

        <label
          htmlFor="
			workerList">
          Добавить сотрудника :
        </label>
        <div className={(style.formBlock, style.formBigBLock)}>
          <select
            name={`personName`}
            id="workerList"
            onChange={handleChangeSelect}
            className={cn({ [style.error]: selectError === true })}
            required>
            <option selected disabled value="">
              Не выбран
            </option>
            {PersonalDataExample.map((worker) => {
              return (
                <option
                  value={`${worker.surname}-${worker.name}-${worker.post}-${worker.salary}-${worker.id}`}
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
            className={cn({ [style.error]: inputError === true })}
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
