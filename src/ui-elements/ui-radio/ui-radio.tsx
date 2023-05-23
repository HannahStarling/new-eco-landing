"use client";

import "./ui-radio.scss";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { IOption } from "@/ui-elements/ui-radio-group/ui-radio-group";
import classNames from "classnames";

export interface IUiRadioProps
  extends InputHTMLAttributes<InputHTMLAttributes<RadioNodeList>> {
  item: IOption;
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  value: any;

  onCheck({ checked, item }: { checked: boolean; item: IOption }): void;
}

export const UiRadio: FC<IUiRadioProps> = ({
  item,
  id,
  onCheck,
  name,
  buttonStyle = "outline",
  autoFocus = false,
  checked = false,
  disabled = false,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onCheck({ checked: e.target.checked, item });

  return (
    <label htmlFor={id} className={classNames("radio-label", buttonStyle)}>
      <input
        disabled={disabled}
        autoFocus={autoFocus}
        id={id}
        type="radio"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      {buttonStyle === "outline" ? (
        <>
          {item.label}
          <span className="checkmark" />
        </>
      ) : (
        <p className="checkmark-button">{item.label}</p>
      )}
    </label>
  );
};
