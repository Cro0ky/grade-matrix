import type { InputProps } from "@/shared/types/input.types.ts";
import cn from "classnames";
import { type ChangeEvent, useRef } from "react";

import styles from "./Input.module.scss";

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    readonly,
    addonLeft,
    label,
    fullWidth,
    addonRight,
    size = "m",
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods = {
    [styles.readonly]: readonly,
    [styles.fullWidth]: fullWidth,
    [styles.withAddonLeft]: Boolean(addonLeft),
    [styles.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={cn(styles.InputWrapper, mods, className, styles[size])}>
      <div className={styles.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={styles.input}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={styles.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <div className={cn(styles.labelWrapper, mods, [styles[size]])}>
        <p className={styles.label}>{label}</p>
        {input}
      </div>
    );
  }
  return input;
};
