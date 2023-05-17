'use client';

import {FC, InputHTMLAttributes} from 'react';
import classNames from 'classnames';
import './ui-input.scss';

interface IProps

InputHTMLAttributes<HTMLInputElement> & {
  classname? : string;
  label? : string;
};

export const UiInput: FC<IProps> = ({classname, required, id, label, ...props}) => {
  return (
    <div className="ui-input">
      <label className="ui-input__label" htmlFor={id}>
        {label}
        {required && <span className="ui-input__label-required">*</span>}
      </label>
      <input
        id={id}
        type="search"
        required={required}
        className={classNames(classname, 'ui-input__field')}
        {...props}
      />
    </div>
  );
};
