import Link from "next/link";
import style from "./Footer.module.scss";
import { FaGithub, FaCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <section className={style.creator}>
        <FaGithub size={20} fill={`var(--orange)`} />
        <Link href={"https://github.com/alexkor1303"} target="blank">
          made by alexkor
        </Link>
      </section>
      <section className={style.copyright}>
        copyright <FaCopyright size={15} fill={`var(--orange)`} />
        <Link
          className={style.vdkWebsite}
          href={"https://vdktech.ru/"}
          target="blank">
          VDK Technology
        </Link>
      </section>
    </footer>
  );
};
