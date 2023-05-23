import { FC, PropsWithChildren } from "react";
import {
  IOption,
  UiRadioGroup,
} from "@/ui-elements/ui-radio-group/ui-radio-group";
import { Period, PeriodName, PERIODS } from "@/constants/tariffs";

interface IProps {
  checked: Period;

  onCheck({ checked, item }: { checked: boolean; item: IOption }): void;
}

export const TariffsPeriodRadio: FC<PropsWithChildren<IProps>> = ({
  onCheck,
  checked,
}) => {
  return (
    <UiRadioGroup
      className={"tariffs__period-radio-group"}
      onCheck={onCheck}
      checked={checked}
      buttonStyle={"solid"}
      options={PERIODS.map((tariff) => ({
        value: tariff,
        label: PeriodName[tariff],
      }))}
    />
  );
};
