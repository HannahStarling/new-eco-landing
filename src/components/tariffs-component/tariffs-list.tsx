"use client";
import { FC, useState } from "react";
import { TariffsPeriodRadio } from "@/components/tariffs-component/tariffs-period-radio";
import { TariffsCards } from "@/components/tariffs-component/tariffs-cards";
import { Period } from "@/constants/tariffs";

export const TariffsList: FC = () => {
  const [checked, setChecked] = useState(Period.Year);

  const onCheck = ({ item }) => setChecked(item.value);
  return (
    <>
      <TariffsPeriodRadio onCheck={onCheck} checked={checked} />
      <TariffsCards checked={checked} />
    </>
  );
};
