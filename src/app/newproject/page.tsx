import { LinkElem } from "@/components";

import style from "./page.module.scss";

export default function newProject() {
  return (
    <div>
      <h1>create project</h1>
      <LinkElem href="/" text="go back" />
    </div>
  );
}
