"use client";
import { useState } from "react";

//data and types
import { Workertype } from "@/Types/worker";
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";

//Components
import { ButtonElem, Input, AddPersonBlock } from "@/components";

//styles and icons
import { IoPersonAdd } from "react-icons/io5";
import style from "./AddProjectForm.module.scss";
import cn from "classnames";
//component
export const AddProjectForm = () => {
  ///hooks///
  const [personList, setPersonList] = useState<Workertype[]>([]);
  const [projectName, setProjectName] = useState("");
  const [projectDirector, setProjectDirector] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [projectEndDate, setProjectEndDate] = useState("");
  const [selectPerson, setSelectPerson] = useState({
    id: "",
    name: "",
    post: "",
    salary: "",
  });
  const [inputPerson, setInputPerson] = useState("");
  const [selectError, setSelectError] = useState(false);
  const [inputError, setInputError] = useState(false);

  //functions
  const calculatePersonSum = (salary: string, hours: string) => {
    return Number(salary) * Number(hours);
  };
  //handleFunctions
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const [id, post, salary, secondName, name] = value.split("-");
    const fullname = `${secondName}  ${name}`;
    setSelectPerson({
      id: id,
      post: post,
      salary: salary,
      name: fullname,
    });
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPerson(event.target.value);
  };

  const handleAddWorker = () => {
    const newPerson: Workertype = {
      id: selectPerson.id,
      name: selectPerson.name,
      post: selectPerson.post,
      salary: selectPerson.salary,
      hours: inputPerson,
      sum: calculatePersonSum(selectPerson.salary, inputPerson),
    };

    setPersonList([...personList, newPerson]);

    setSelectPerson({
      id: "",
      post: "",
      salary: "",
      name: "",
    });
    setInputPerson("");
  };
  console.log(personList);
  return (
    <div className={style.wrapper}>
      <form action={"#"} method="post" className={style.formWrapper}>
        <Input
          className={style.formBlock}
          description="Название проекта :"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={handleInputChange(setProjectName)}
        />
        <Input
          className={style.formBlock}
          description="Руководитель проекта :"
          id="projectDirector"
          name="projectDirector"
          value={projectDirector}
          onChange={handleInputChange(setProjectDirector)}
        />
        <Input
          className={style.formBlock}
          description="Дата старта проекта :"
          type="date"
          id="projectStartDate"
          name="projectStartDate"
          value={projectStartDate}
          onChange={handleInputChange(setProjectStartDate)}
        />
        <Input
          className={style.formBlock}
          description="Дата завершени проекта :"
          type="date"
          id="projectEndDate"
          name="projectEndDate"
          value={projectEndDate}
          onChange={handleInputChange(setProjectEndDate)}
        />
        {/* STOP */}
        <AddPersonBlock
          id="PersonList"
          onChangeSelect={handleChangeSelect}
          onChangeInput={handleChangeInput}
          selectValue={selectPerson}
          inputValue={inputPerson}
          selectError={selectError}
          inputError={inputError}
          errorClassName={style.error}
          personalData={PersonalDataExample}
        />
        <ButtonElem handleEvent={handleAddWorker}>
          <IoPersonAdd fill="white" />
        </ButtonElem>
        <p>Список сотрудников :</p>
        <section className={style.workerList}>
          <ul>
            {personList.map((person) => (
              <li key={person.name}>
                Сотрудник :{person.name} Часов : {person.hours}
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
