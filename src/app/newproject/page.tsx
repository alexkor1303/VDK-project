"use client";
import { useState } from "react";
import { AddProjectForm } from "@/components";
import style from "./page.module.scss";
import cn from "classnames";

import { LinkElem, CreateTitle, ModalWindow } from "@/components";

export default function NewProject() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className={style.wrapper}>
      <CreateTitle
        title="Создать проект"
        buttonClick={() => setOpenModal(true)}
        image="project"
      />
      <ModalWindow
        state={openModal}
        closeModalWindow={() => setOpenModal(false)}>
        <AddProjectForm />
      </ModalWindow>
      <LinkElem href="/" text="go back" />
    </div>
  );
}
