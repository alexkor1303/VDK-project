"use client";
import React from "react";

//components
import { InputElem, ButtonElem } from "@/components";
//styles & icons
import style from "./AddPersonForm.module.scss";
//data
import { PostsData } from "../../../DataExample/PostsData";

interface AddPersonProps {
  title: string;
}
export const AddPersonForm = ({ title }: AddPersonProps) => {
  const [value, setValue] = React.useState("");
  //dataChecker delete after
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const jsonObject: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value.toString();
    });
    console.log(JSON.stringify(jsonObject));
  };

  //component
  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>
      <form
        action="#"
        method="post"
        className={style.form}
        name="person"
        onSubmit={onSubmit}>
        <InputElem id="get-fristname" title="Имя :" name="firstName" />
        <InputElem id="get-surname" title="Отчество :" name="surName" />
        <InputElem id="get-secondname" title="Фамилия :" name="secondName" />
        <label htmlFor="person-post" className={style.selectInput}>
          Должность :
          <select id="person-post" name="post">
            {PostsData.map((post) => {
              return (
                <option key={post.id} value={post.profession}>
                  {post.profession}
                </option>
              );
            })}
          </select>
        </label>
        <InputElem id="get-salary" title="Оплата в час :" name="salary" />
        <ButtonElem type="submit" className={style.submit}>
          Создать
        </ButtonElem>
      </form>
    </div>
  );
};
