import { FC, PropsWithChildren } from "react";
import {
  IOption,
  UiRadioGroup,
} from "@/ui-elements/ui-radio-group/ui-radio-group";
import { Period, PeriodName, PERIODS } from "@/constants/tariffs";

interface IProps {
  chosen: Period;

  onCheck({ item }: { item: IOption }): void;
}

export const TariffsPeriodRadio: FC<PropsWithChildren<IProps>> = ({
  onCheck,
  chosen,
}) => {
  return (
    <UiRadioGroup
      className={'tariffs__period-radio-group'}
      onCheck={onCheck}
      chosen={chosen}
      buttonStyle={'solid'}
      options={PERIODS.map((tariff) => ({
        value: tariff,
        label: PeriodName[tariff],
      }))}
    />
  );
};
