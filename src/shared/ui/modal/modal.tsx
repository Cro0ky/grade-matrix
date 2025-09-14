import { useAppDispatch, useAppSelector } from "@/shared/hooks/reaact-hooks.ts";
import { useModal } from "@/shared/hooks/useModal.ts";
import { selectModals } from "@/shared/store/selectors/modals.selector.ts";
import { closeModal } from "@/shared/store/slices/modals.slice.ts";
import type { IModalProps } from "@/shared/types/modal.types.ts";
import { Button, Portal } from "@/shared/ui";
import { type FC } from "react";

import { ModalWrapper } from "./components/modal-wrapper/modal-wrapper.tsx";
import { ANIMATION_DELAY } from "./components/modal.constants.ts";

import styles from "./modal.module.scss";

export const Modal: FC<IModalProps> = ({
  variant = "default",
  size = "s",
  buttons,
  title,
  children,
  zIndex = 100,
  name,
  onClose = () => {},
}) => {
  const { activeModal } = useAppSelector(selectModals);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (activeModal) {
      dispatch(closeModal(activeModal));
    }
  };

  const { isAnimating, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen: !!activeModal,
    onClose: handleClose,
  });

  if (!isMounted) return null;

  return (
    <Portal>
      <ModalWrapper
        name={name}
        isClosing={isClosing}
        isAnimating={isAnimating}
        variant={variant}
        zIndex={zIndex}
        size={size}
        onClose={() => {
          handleClose();
          onClose();
        }}
      >
        {!!title && <h2 className={styles.title}>{title}</h2>}
        {!!children && <div className={styles.content}>{children}</div>}
        <div className={styles.btns}>
          {buttons?.length
            ? buttons.map((props, index) => <Button key={index} {...props} />)
            : null}
        </div>
      </ModalWrapper>
    </Portal>
  );
};
