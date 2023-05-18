import { FC } from "react";
import { IUiRadioProps, UiRadio } from "@/ui-elements/ui-radio/ui-radio";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";

interface IProps extends Omit<IUiRadioProps, "item" | "value" | "checked"> {
  className?: string;
  options: Array<IOption>;
}

export interface IOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export const UiRadioGroup: FC<IProps> = ({
  className,
  options,
  name,
  checked,
  ...props
}) => {
  return (
    <UiList className={className}>
      {options.map((item) => {
        return (
          <UiListItem key={item.value}>
            <UiRadio
              {...props}
              item={item}
              name={name ?? item.value}
              checked={checked === item.value}
            >
              {item.label}
            </UiRadio>
          </UiListItem>
        );
      })}
    </UiList>
  );
};
