import Link from "next/link";
import style from "./LinkElem.module.scss";
interface LinkProps {
  text: string;
  href: string;
}
export const LinkElem = ({ text, href = "/" }: LinkProps) => {
  return (
    <Link href={href} className={style.link}>
      {text}
    </Link>
  );
};
