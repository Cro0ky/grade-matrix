import type { ModalWrapperProps } from "@/shared/types/modal.types.ts";
import cn from "classnames";
import type { FC } from "react";

import styles from "./modal-wrapper.module.scss";

export const ModalWrapper: FC<ModalWrapperProps> = ({
  variant,
  size,
  isClosing,
  isAnimating,
  children,
  onClose,
  zIndex,
}) => {
  const mods = {
    [styles.isOpened]: isAnimating && !isClosing,
    [styles.isClosing]: isClosing,
  };
  return (
    <div
      onClick={onClose}
      style={{ zIndex }}
      className={cn(styles.container, mods)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          styles[`bg_${variant}`],
          styles[`size_${size}`],
          styles.info,
          mods
        )}
      >
        {children}
      </div>
    </div>
  );
};
