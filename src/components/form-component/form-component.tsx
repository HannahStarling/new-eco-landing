'use client';

import { FormFields } from '@/constants/form';
import { UiInput } from '@/ui-elements/ui-input/ui-input';
import classNames from 'classnames';
import { FC } from 'react';
import './form-component.scss';
import { UiButton } from '@/ui-elements/ui-button/ui-button';
import { UiTitle } from '@/ui-elements/ui-title/ui-title';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { IconName } from '@/ui-elements/ui-icon/icon-names';

enum METHOD {
  GET = 'GET',
  POST = 'POST',
}

interface IProps {
  className?: string;
  action?: string;
  method?: METHOD;
  onClose?: () => void;
}

export const FormComponent: FC<IProps> = ({ action, className, method = METHOD.POST, onClose }) => {
  return (
    <div className={classNames('form', className)}>
      <div className="form__header">
        <UiTitle className="form__header-title">Свяжитесь с нами, для получения доступа</UiTitle>
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
      <form action={action} method={method}>
        {Object.entries(FormFields).map(([name, field]) => {
          return (
            <UiInput
              id={name}
              key={name}
              name={name}
              pattern={field.pattern}
              label={field.text}
              type={field.type}
              classname={field.className}
              placeholder={field.placeholder}
              required={field.required}
            />
          );
        })}
        <UiButton type="submit" className="form__submit">
          Запрос на доступ
        </UiButton>
      </form>
    </div>
  );
};
