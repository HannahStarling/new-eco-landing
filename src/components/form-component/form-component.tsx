"use client";

import { FormFieldContactUs, FormFields } from "@/constants/form";
import { UiInput } from "@/ui-elements/ui-input/ui-input";
import classNames from "classnames";
import { FC, FormEvent } from "react";
import "./form-component.scss";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { Method } from "@/types/api";
import { FormValues } from "@/types/models";

interface IProps {
  className?: string;
  action?: string;
  method?: Method;
  values: FormValues<FormFieldContactUs>;
  isValid: boolean;

  onClose?(): void;

  onSubmit(v: any): void;
}

export const FormComponent: FC<IProps> = ({
  isValid,
  values,
  onChange,
  onSubmit,
  className,
  onClose,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <div className={classNames("form", className)}>
      <div className="form__header">
        <UiTitle className="form__header-title">
          Свяжитесь с нами, для получения доступа
        </UiTitle>
        {onClose && (
          <UiIcon
            className="form__header-close"
            name={IconName.Close}
            alt="Закрыть"
            size={{ width: 14, height: 14 }}
            onClick={onClose}
          />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        {Object.entries(FormFields).map(([name, field]) => {
          return (
            <UiInput
              id={name}
              key={name}
              name={name}
              label={field.text}
              type={field.type}
              classname={field.className}
              placeholder={field.placeholder}
              required={field.required}
              checked={values[name]}
              value={values[name]}
              onChange={onChange}
            />
          );
        })}
        <UiButton
          disabled={!Boolean(values.Agreement) || !isValid}
          type={"submit"}
          className="form__submit"
        >
          Запрос на доступ
        </UiButton>
      </form>
    </div>
  );
};
