import style from "./page.module.scss";
import { ContentBlock, Input, ButtonElem } from "@/components";

export default function NewProject() {
  return (
    <div className={style.wrapper}>
      <section className={style.subHeader}>
        <ButtonElem>
          <a href="/">На главную</a>
        </ButtonElem>
      </section>
      <div className={style.main}>
        <ContentBlock className={style.createProject} title="Создать проект">
          <div className={style.createProjectForm}>
            <form action="#">
              <Input
                id="projectName"
                name="projectName"
                className={style.projectInput}
                placeholder="Название проекта..."
              />
              <Input
                id="projectDirector"
                name="projectDirector"
                className={style.projectInput}
                placeholder="Руководитель проекта..."
              />
              <Input
                id="projectStartDate"
                name="projectStartDate"
                className={style.projectInput}
                description="Дата старта проекта"
                type="date"
              />
              <ButtonElem type="submit">Создать проект</ButtonElem>
            </form>
          </div>
        </ContentBlock>
        <ContentBlock className={style.activeProject} title="Активные проекты">
          <div className={style.list}></div>
        </ContentBlock>
        <ContentBlock className={style.archiveProject} title="Архивные проекты">
          <div className={style.list}></div>
        </ContentBlock>
      </div>
    </div>
  );
}
