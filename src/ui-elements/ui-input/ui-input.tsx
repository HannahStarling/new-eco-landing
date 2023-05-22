"use client";

import { FC } from "react";
import classNames from "classnames";
import "./ui-input.scss";
import { FormType } from "@/constants/form";

interface IProps {
  label: string;
  required?: boolean;
  id?: string;
  classname?: string | null;
  type: typeof FormType | string;
  name: string;
  placeholder?: string;
  pattern?: string | null;
  error?: string;
}

export const UiInput: FC<IProps> = ({
  error,
  classname,
  required,
  id,
  label,
  type = "search",
  name,
  pattern,
  ...props
}) => {
  return (
    <div className="ui-input">
      <input
        autoComplete={"on"}
        {...props}
        id={id}
        type={type as string}
        className={classNames("ui-input__field", classname, {
          "ui-input_type_error": error,
        })}
        name={name}
        pattern={pattern || undefined}
        required={required}
      />
      {error && (
        <span className="ui-input-error" aria-live="polite">
          {error}
        </span>
      )}
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required && <span className="ui-input__label-required">*</span>}
      </label>
    </div>
  );
};
