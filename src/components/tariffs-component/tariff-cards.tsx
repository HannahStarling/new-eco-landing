import { FC } from "react";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { TariffsCard } from "@/components/tariffs-component/tariffs-card";
import { Period, TARIFFS_LIST } from "@/constants/tariffs";

interface IProps {
  checked: Period;
}

export const TariffCards: FC<IProps> = ({ checked }) => {
  return (
    <UiList className={"tariffs__cards"}>
      {TARIFFS_LIST.map((tariff) => {
        return (
          <UiListItem key={tariff} className={"tariffs__card"}>
            <TariffsCard period={checked} tariff={tariff} />
          </UiListItem>
        );
      })}
    </UiList>
  );
};
