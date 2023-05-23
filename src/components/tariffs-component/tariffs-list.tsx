"use client";
import { FC, useState } from "react";
import { TariffsPeriodRadio } from "@/components/tariffs-component/tariffs-period-radio";
import { TariffsCards } from "@/components/tariffs-component/tariffs-cards";
import { Period } from "@/constants/tariffs";
import { IOption } from "@/ui-elements/ui-radio-group/ui-radio-group";

export const TariffsList: FC = () => {
  const [checked, setChecked] = useState(Period.Year);

  const onCheck = ({ item }: { item: IOption }) =>
    setChecked(item.value as Period);
  return (
    <>
      <TariffsPeriodRadio onCheck={onCheck} checked={checked} />
      <TariffsCards checked={checked} />
    </>
  );
};
