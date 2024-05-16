import React from "react";
import { PersonData } from "@/Types/worker";
import style from "./AddPersonBlock.module.scss";
import cn from "classnames";
import { ButtonElem } from "..";
import { IoPersonAdd } from "react-icons/io5";
interface AddPersonBlockProps {
  id: string;
  selectValue: { id: string; name: string; post: string; salary: string };
  inputValue: string;
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectError: boolean;
  inputError: boolean;
  errorClassName: string;
  personalData: PersonData[];
  submitPerson: () => void;
}
export const AddPersonBlock = ({
  id,
  onChangeSelect,
  onChangeInput,
  selectError,
  inputError,
  errorClassName,
  personalData,
  selectValue,
  inputValue,
  submitPerson,
}: AddPersonBlockProps) => {
  return (
    <div>
      <label htmlFor={id}>Добавить сотрудника :</label>
      <select
        name="personName"
        id={id}
        onChange={onChangeSelect}
        className={cn(style.select, {
          [style.errorClassName]: selectError === true,
        })}>
        {personalData.map((person) => (
          <option
            value={`${person.id}-${person.post}-${person.salary}-${person.surname}-${person.name}`}
            key={person.id}>
            {`${person.surname}-${person.name}`}
          </option>
        ))}
      </select>
      <input
        className={cn(style.input, {
          [style.errorClassName]: inputError === true,
        })}
        type="text"
        name="personHours"
        id={id}
        onChange={onChangeInput}
        placeholder="часов отработано... "
        value={inputValue}
      />
      <ButtonElem handleEvent={submitPerson}>
        <IoPersonAdd fill="white" />
      </ButtonElem>
    </div>
  );
};
