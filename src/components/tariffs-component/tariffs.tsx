import "./tariffs.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { TariffsList } from "@/components/tariffs-component/tariffs-list";
import { TariffsPreferencesList } from "@/components/tariffs-component/tariffs-preferences-list";

export const Tariffs: FC = () => {
  return (
    <UiSection className="tariffs">
      <UiSectionTitle>Тарифы на Платформу</UiSectionTitle>
      <TariffsPreferencesList />
      <TariffsList />
    </UiSection>
  );
};
