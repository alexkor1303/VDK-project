import style from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={style.wrapper}>
      <h1>VDK</h1>
      <span>Технологии производства</span>
    </header>
  );
};
