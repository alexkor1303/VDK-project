//data & style
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";
import style from "./page.module.scss";

//components & icons
import { ButtonElem, ContentBlock, Input } from "@/components";

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
  return (
    <div className={style.wrapper}>
      <div className={style.subHeader}>
        <ButtonElem>
          <a href="/">На главную</a>
        </ButtonElem>
      </div>
      <div className={style.main}>
        <ContentBlock
          className={style.createPerson}
          title="Добавить сотрудника">
          <form action="#">
            <Input
              id="personName"
              name="personName"
              placeholder="Имя работника"
            />
            <Input
              id="personSecondName"
              name="personSecondName"
              placeholder="Отчество работника"
            />
            <Input
              id="personSurname"
              name="personSurname"
              placeholder="Фамилия работника"
            />
            <Input
              id="personPost"
              name="personPost"
              placeholder="должность работника"
            />
            <Input
              id="personCoast"
              name="personCoast"
              placeholder="Оплата в час"
            />
            <ButtonElem type="submit">Добавить сотрудника</ButtonElem>
          </form>
        </ContentBlock>

        <ContentBlock
          className={style.activePersonList}
          title="Список сотрудников">
          <div className={style.activePersonListInner}>list</div>
        </ContentBlock>

        <ContentBlock
          className={style.statisticPersonList}
          title="Статистика по персоналу">
          <section className={style.statisticSection}>
            <ul>
              <li>
                Общее Количество сотрудников : {PersonalDataExample.length}
              </li>
              <li>Количество Сварщиков : {postFind("svarka")}</li>
              <li>Количество Операторов ЧПУ : {postFind("chpuOperator")}</li>
              <li>Количество Слесарей : {postFind("laserboy")}</li>
              <li>Количество Маляров : {postFind("Painter")}</li>
            </ul>
          </section>
        </ContentBlock>
      </div>
    </div>
  );
}
