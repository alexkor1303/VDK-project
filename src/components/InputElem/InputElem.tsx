import style from "./InputElem.module.scss";

interface InputElemProps {
  id: string;
  title: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  name?: string;
  value?: string;
  type?: string;
  defaultValue?: string;
  autoComplete?: boolean;
  placeholder?: string;
  tabindex?: number;
}

export const InputElem = ({
  id,
  title,
  type = "text",
  name,
  value,
  defaultValue,
  autoComplete = true,
  placeholder = "",
  tabindex,
  onChange,
}: InputElemProps) => {
  return (
    <label htmlFor={id} className={style.inputElem}>
      {title}
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        autoComplete={autoComplete ? "on" : "off"}
        defaultValue={defaultValue ? defaultValue : ""}
        placeholder={placeholder}
        tabIndex={tabindex}
        onChange={onChange}
      />
    </label>
  );
};
