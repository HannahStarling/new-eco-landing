import { FC } from 'react';
import { IUiRadioProps, UiRadio } from '@/ui-elements/ui-radio/ui-radio';
import { UiList } from '@/ui-elements/ui-list/ui-list';
import { UiListItem } from '@/ui-elements/ui-list-item/ui-list-item';
import classNames from 'classnames';
import { Period, PeriodName } from '@/constants/tariffs';

interface IProps extends Omit<IUiRadioProps, 'item' | 'value' | 'checked'> {
  className?: string;
  options: Array<IOption>;
  chosen?: Period;
}

export interface IOption {
  label: string;
  value: Period;
  disabled?: boolean;
}

export const UiRadioGroup: FC<IProps> = ({ className, options, name, chosen, ...props }) => {
  return (
    <UiList className={classNames(className)}>
      {options.map((item) => {
        return (
          <UiListItem key={item.value}>
            <UiRadio
              {...props}
              item={item}
              name={name ?? item.value}
              checked={chosen === item.value}>
              {item.label}
            </UiRadio>
          </UiListItem>
        );
      })}
    </UiList>
  );
};
