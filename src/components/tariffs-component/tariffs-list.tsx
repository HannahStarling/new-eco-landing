<<<<<<< HEAD
"use client";
import { FC, useState } from "react";
import { TariffsPeriodRadio } from "@/components/tariffs-component/tariffs-period-radio";
import { TariffsCards } from "@/components/tariffs-component/tariffs-cards";
import { Period } from "@/constants/tariffs";
import { IOption } from "@/ui-elements/ui-radio-group/ui-radio-group";
=======
'use client';
import { FC, useState } from 'react';
import { TariffsPeriodRadio } from '@/components/tariffs-component/tariffs-period-radio';
import { TariffsCards } from '@/components/tariffs-component/tariffs-cards';
import { Period } from '@/constants/tariffs';
import { IOption } from '@/ui-elements/ui-radio-group/ui-radio-group';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

export const TariffsList: FC = () => {
  const [chosen, setChosen] = useState(Period.Year);

<<<<<<< HEAD
  const onCheck = ({ item }: { item: IOption }) =>
    setChecked(item.value as Period);
=======
  const onCheck = ({ item }: { item: IOption }) => setChosen(item.value);
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <>
      <TariffsPeriodRadio onCheck={onCheck} chosen={chosen} />
      <TariffsCards checked={chosen} />
    </>
  );
};
