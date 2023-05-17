'use client';

import {FC, InputHTMLAttributes} from 'react';
import classNames from 'classnames';
import './ui-checkbox.scss';

export interface IProps

InputHTMLAttributes<HTMLInputElement> & {
  className? : string;
  label? : string;
};

export const UiCheckbox: FC<IProps> = ({
  id,
  label,
  checked,
  disabled,
  onChange,
  children,
  className,
  defaultChecked,
  required,
  ...props
}) => (
  <div className={classNames(className, 'ui-checkbox')}>
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={checked}
      required={required}
      disabled={disabled}
      onChange={onChange}
      defaultChecked={defaultChecked}
      {...props}
    />
    <label className="ui-checkbox__label" htmlFor={id}>
      {label || children}
    </label>
  </div>
);
