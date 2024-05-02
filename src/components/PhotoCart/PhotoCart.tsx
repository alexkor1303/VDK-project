import Image from "next/image";
import style from "./PhotoCart.module.scss";

interface PhotoCartProps {
  image: string;
  text: string;
  page: string;
}
export const PhotoCart = ({ image, text, page }: PhotoCartProps) => {
  return (
    <a href={page}>
      <div className={style.wrapper}>
        <div
          className={style.background}
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backdropFilter: "blur(5px)",
          }}></div>
        <p>{text.toUpperCase()}</p>
      </div>
    </a>
  );
};
