import cn from "classnames";
import type { FC, HTMLAttributes } from "react";

import styles from "./slot.module.scss";

interface SlotProps extends HTMLAttributes<HTMLDivElement> {}

export const Slot: FC<SlotProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
    </div>
  );
};
