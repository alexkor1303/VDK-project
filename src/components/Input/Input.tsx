import style from "./Input.module.scss";
import cn from "classnames";
interface InputProps {
  description?: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  className?: string;
}
export const Input = ({
  id,
  name,
  value,
  onChange,
  type = "text",
  className = "",
  description,
  placeholder,
}: InputProps) => {
  return (
    <div className={cn(style.inputBlock, className)}>
      {description && <label htmlFor={id}>{description}</label>}
      <input
        className={style.input}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
