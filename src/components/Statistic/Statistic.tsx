import style from "./Statistic.module.scss";

//data's
import { PersonalDataExample } from "../../../DataExample/PersonalDataExample";
import { ProjectDataExample } from "../../../DataExample/ProjectDataExample";

//functions
function getAverageTime(projectsArr: { days: number }[]) {
  let days = 0;
  let projectsCount = 0;
  for (let project of ProjectDataExample) {
    days += project.days;
    projectsCount++;
  }
  const averageTime = days / projectsCount;
  return averageTime;
}

//component
export const Statistic = () => {
  return (
    <div className={style.wrapper}>
      <h2>Статистика :</h2>
      <div>
        <ul>
          <li>
            Количество сотрудников : {PersonalDataExample.length} человек.
          </li>
          <li>Количество проектов : {ProjectDataExample.length}.</li>
          <li>{`Среднее время выполнения проекта : ${getAverageTime(
            ProjectDataExample
          )} часов.`}</li>
        </ul>
      </div>
    </div>
  );
};
