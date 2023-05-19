import { FormFields } from "@/constants/form";
import { UiInput } from "@/ui-elements/ui-input/ui-input";
import classNames from "classnames";
import { FC } from "react";
import "./form-component.scss";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { UiTitle } from "@/ui-elements/ui-title/ui-title";

enum METHOD {
  GET = "GET",
  POST = "POST",
}

interface IProps {
  className?: string;
  action?: string;
  method?: METHOD;
}

export const FormComponent: FC<IProps> = ({
  action,
  className,
  method = METHOD.POST,
}) => {
  return (
    <div className={classNames("form", className)}>
      <UiTitle className="form__title">
        Свяжитесь с нами, для получения доступа
      </UiTitle>
      <form action={action} method={method}>
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
            />
          );
        })}
        <UiButton className="form__submit">Запрос на доступ</UiButton>
      </form>
    </div>
  );
};
