import React from "react";
import style from "./ContentBlock.module.scss";
import cn from "classnames";

interface ContentBlockProps {
  className: string;
  title?: string;
  children?: React.ReactNode;
}
export const ContentBlock = ({
  title,
  className,
  children,
}: ContentBlockProps) => {
  return (
    <div className={cn(className, style.wrapper)}>
      {title && <h2>{title}</h2>}
      <section className={cn(style.ContentBlock)}>{children}</section>
    </div>
  );
};
