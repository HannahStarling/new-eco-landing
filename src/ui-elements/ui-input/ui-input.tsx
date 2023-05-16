'use client';

import { FC } from 'react';
import classNames from 'classnames';
import './ui-input.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  classname?: string;
  label?: string;
};

export const UiInput: FC<Props> = ({ classname, required, id, label, ...props }) => {
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
