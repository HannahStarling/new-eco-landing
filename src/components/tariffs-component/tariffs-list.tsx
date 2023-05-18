"use client";
import { FC, useState } from "react";
import { TariffPeriodRadio } from "@/components/tariffs-component/tariff-period-radio";
import { TariffCards } from "@/components/tariffs-component/tariff-cards";
import { Period } from "@/constants/tariffs";

interface IProps {}

export const TariffsList: FC<IProps> = () => {
  const [checked, setChecked] = useState(Period.Year);

  const onCheck = ({ item }) => setChecked(item.value);
  return (
    <>
      <TariffPeriodRadio onCheck={onCheck} checked={checked} />
      <TariffCards checked={checked} />
    </>
  );
};
