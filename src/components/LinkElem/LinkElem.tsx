import Link from "next/link";

//style
import style from "./LinkElem.module.scss";

//Props
interface LinkProps {
  text: string;
  href: string;
}

//component
export const LinkElem = ({ text, href = "/" }: LinkProps) => {
  return (
    <Link href={href} className={style.link}>
      {text}
    </Link>
  );
};
