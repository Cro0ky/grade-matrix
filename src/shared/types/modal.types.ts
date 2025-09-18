import type { ButtonProps } from "@/shared/types/button.types.ts";
import type { ReactNode } from "react";

export type TModaVariants = "default";

export type Size = "s" | "m" | "l" | "xl";

export interface IBaseModalProps {
  variant?: TModaVariants;
  children?: ReactNode;
  onClose?: () => void;
  zIndex?: number;
  name: EModalName;
  size?: Size;
}

export interface ModalWrapperProps extends IBaseModalProps {
  isAnimating: boolean;
  isClosing: boolean;
}

export interface IBaseModal {
  modals: EModalName[];
  activeModal: EModalName | null;
}

export interface IModalProps extends IBaseModalProps {
  title?: string;
  buttons?: ButtonProps[];
}

export enum EModalName {
  TEST = "TEST",
}
