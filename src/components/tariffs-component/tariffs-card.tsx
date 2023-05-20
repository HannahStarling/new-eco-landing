import { FC } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiTitle } from "@/ui-elements/ui-title/ui-title";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { Period, TARIFFS, TARIFFS_FEATURES } from "@/constants/tariffs";
import { TariffsPrice } from "@/components/tariffs-component/tariffs-price";
import { TariffsFeature } from "@/components/tariffs-component/tariffs-feature";
import { GetAccessButtonComponent } from "@/components/buttons/get-access-button/get-access-button-component";

interface IProps {
  tariff: string;
  period?: Period;
}

export const TariffsCard: FC<IProps> = ({ tariff, period = Period.Year }) => {
  const { cost, name, includes } = TARIFFS[tariff];
  const isPersonal = typeof cost === "string";

  return (
    <UiCard className={"tariffs__card-content"}>
      <UiTitle>{name}</UiTitle>
      <UiList type={ListType.vertical} className={"tariffs__card-list"}>
        {TARIFFS_FEATURES.map(([key, title]) => {
          const include = includes.includes(key);
          return <TariffsFeature key={key} title={title} include={include} />;
        })}
      </UiList>
      <UiParagraph>
        {isPersonal ? cost : <TariffsPrice price={cost[period].price} />}
      </UiParagraph>
      <GetAccessButtonComponent
        mode={"light"}
        fillType={"filled"}
        className={"tariffs__card-button"}
      >
        Связаться
      </GetAccessButtonComponent>
    </UiCard>
  );
};
