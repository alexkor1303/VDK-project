import style from "./page.module.scss";
import { PhotoCart, Statistic } from "@/components";
export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.mainCartSection}>
        <PhotoCart image="/mkReport.jpeg" text="отчеты" page="/decloration" />
        <PhotoCart
          image="/mkProjectPhoto.jpeg"
          text="проекты"
          page="/projects"
        />
        <PhotoCart
          image="/mkPersonPhoto.jpeg"
          text="работники"
          page="/newperson"
        />
      </div>
      <Statistic />
    </main>
  );
}
