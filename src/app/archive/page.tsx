import { LinkElem } from "@/components";
import style from "./page.module.scss";
export default function Archive() {
  return (
    <div className={style.wrapper}>
      <section className={style.subhead}>
        <h1>its archive</h1>
        <LinkElem text="go back" href="/" />
      </section>
    </div>
  );
}
