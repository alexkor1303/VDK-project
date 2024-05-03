import { LinkElem } from "@/components";

import style from "./page.module.scss";

export default function newPerson() {
  return (
    <div className={style.wrapper}>
      <h1>create person</h1>
      <LinkElem href="/" text="go back" />
    </div>
  );
}
