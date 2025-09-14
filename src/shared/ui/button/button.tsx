import type { ButtonProps } from "@/shared/store/selectors/button.types.ts";
import cn from "classnames";
import type { FC } from "react";

import styles from "./button.module.scss";

export type ButtonColor = "primary" | "secondary" | "success" | "error";

export type ButtonType = "fill" | "outline" | "ghost" | "lim";

export const Button: FC<ButtonProps> = ({
  color = "primary",
  type = "fill",
  htmlType,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, styles[color], styles[type])}
      type={htmlType}
      {...props}
    >
      {!!iconLeft && <div className={styles.iconContainer}>{iconLeft}</div>}
      {children}
      {!!iconRight && <div className={styles.iconContainer}>{iconRight}</div>}
    </button>
  );
};
