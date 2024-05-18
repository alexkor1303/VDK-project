//data & style file
import style from "./page.module.scss";
import { ProjectDataExample } from "../../../DataExample/ProjectDataExample";

//components & icons
import { ProjectElem } from "@/components";
import { MdDateRange } from "react-icons/md";

//constant
const today = new Date().toLocaleDateString();

//page
export default function Archive() {
  return (
    <div className={style.wrapper}>
      <div className={style.subheadSection}>
        <section className={style.dateBlock}>
          <p>Список выполненных проектов : {today}</p>
          <MdDateRange className={style.dateIcon} size={30} />
        </section>
      </div>
      <div className={style.projectsSection}>
        {ProjectDataExample.map((project) => {
          return <ProjectElem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}
