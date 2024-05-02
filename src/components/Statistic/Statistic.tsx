import style from "./Statistic.module.scss";
import { StatisticData } from "./StatisticData";
export const Statistic = () => {
  return (
    <div className={style.wrapper}>
      <h2>Статистика :</h2>
      {StatisticData.map((elem, index) => {
        return (
          <div key={index}>
            <ul>
              <li>Количество сотрудников : {elem.personal} человек.</li>
              <li>Количество проектов : {elem.projects}.</li>
              <li>
                Среднее время выполнения проекта : {elem.mediumTime} часов.
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
