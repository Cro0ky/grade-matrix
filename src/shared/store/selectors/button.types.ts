import type { ButtonType } from "@/shared/ui/button/button.tsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "clear" | "fill";
export type ButtonColor = "orange" | "blue" | "green" | "red" | "white";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  color?: ButtonColor;
  type?: ButtonType;
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}
