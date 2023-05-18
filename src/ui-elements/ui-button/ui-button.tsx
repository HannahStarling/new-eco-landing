"use client";

import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";
import "./ui-button.scss";
import { Mode, Type } from "./types";

export type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // отвечает за синий или голубой цвет кнопки
  mode?: Mode;
  // отвечает за заполнение кнопки: заполненная или прозрачная
  fillType?: Type;
  isLoading?: boolean;
};

export const UiButton: FC<UiButtonProps> = ({
  isLoading = false,
  disabled = false,
  mode = "light",
  fillType = "filled",
  onClick,
  className,
  children,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const handleClick = (e: any) => !isDisabled && onClick?.(e);

  return (
    <button
      className={classNames(
        "ui-button",
        className,
        { "ui-button__filled": fillType === "filled" },
        { "ui-button__outlined": fillType === "outlined" },
        { "ui-button__disabled": isDisabled },
        { "ui-button__light": mode === "light" },
        { "ui-button__dark": mode === "dark" }
      )}
      onClick={handleClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
