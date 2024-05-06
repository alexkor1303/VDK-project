//style
import style from "./PhotoCart.module.scss";

//Props
interface PhotoCartProps {
  image: string;
  text: string;
  page: string;
}

//component
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
          }}></div>
        <p>{text.toUpperCase()}</p>
      </div>
    </a>
  );
};
