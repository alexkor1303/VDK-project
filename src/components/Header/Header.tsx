import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <h1>VDK</h1>
      <span>Рассчёт себестоимости проектов</span>
    </header>
  );
};
