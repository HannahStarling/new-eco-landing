"use client";

import { FormFieldContactUs, FormFields, InputProps } from "@/constants/form";
import { UiInput } from "@/ui-elements/ui-input/ui-input";
import classNames from "classnames";
import {
  ChangeEvent,
  FC,
  FormEvent,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import "./form-component.scss";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { FormErrors, FormValues } from "@/types/models";

interface IProps {
  className?: string;
  values: FormValues<FormFieldContactUs>;
  isValid: boolean;
  errors: FormErrors<FormFieldContactUs>;

  onChange(e: ChangeEvent<HTMLInputElement>): void;

  onClose?(): void;

  onSubmit(values: FormValues<FormFieldContactUs>): void;
}

export const FormComponent: FC<PropsWithChildren<IProps>> = ({
  isValid,
  values,
  onChange,
  onSubmit,
  className,
  onClose,
  errors,
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
        {(Object.entries(FormFields) as Array<[FormFields, InputProps]>).map(
          ([name, field]) => {
            return (
              <UiInput
                error={errors[name]}
                id={name}
                key={name}
                name={name}
                pattern={field.pattern}
                label={field.text}
                type={field.type}
                classname={field.className}
                placeholder={field.placeholder}
                required={field.required}
                checked={Boolean(values[name])}
                value={
                  values[name] as InputHTMLAttributes<HTMLInputElement>["value"]
                }
                onChange={onChange}
              />
            );
          }
        )}
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
