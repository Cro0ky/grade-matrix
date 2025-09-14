import type { ReactNode } from "react";

export interface SideBarItemProps {
  icon?: ReactNode;
  to: string;
  title: string;
}
