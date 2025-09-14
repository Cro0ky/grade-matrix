import { useCallback, useEffect, useRef, useState } from "react";

interface IUseModalProps {
  animationDelay?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export function useModal({ animationDelay, isOpen, onClose }: IUseModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Функции для взаимодействия с модальным окном

  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Логика закрытия с анимацией
  const close = useCallback(() => {
    if (onCloseRef.current) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onCloseRef.current?.();
        setIsClosing(false);
        setIsMounted(false);
        setIsAnimating(false);
      }, animationDelay);
    }
  }, [animationDelay]);

  // Логика открытия (установка анимации)
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setIsClosing(false);
      setTimeout(() => {
        setIsAnimating(true); // Запускаем анимацию после задержки
      }, 30);
    } else if (!isOpen && isMounted) {
      setIsAnimating(false); // Отключаем анимацию при закрытии
      close();
    }
  }, [isOpen, isMounted, close]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (isMounted) window.addEventListener("keydown", onKeyDown);

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMounted, close]);

  return {
    isClosing,
    isMounted,
    isAnimating,
    close,
  };
}
