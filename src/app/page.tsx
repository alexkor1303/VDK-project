import style from "./page.module.scss";
import { PhotoCart, Statistic } from "@/components";
export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.mainCartSection}>
        <PhotoCart
          image="/mkProjectPhoto.jpeg"
          text="создать  проект"
          page="/newproject"
        />
        <PhotoCart
          image="/mkPersonPhoto.jpeg"
          text="добавить  сотрудника"
          page="/newperson"
        />
        <PhotoCart
          image="/archivePhoto.jpeg"
          text="архив  проектов"
          page="/archive"
        />
      </div>
      <Statistic />
    </main>
  );
}
