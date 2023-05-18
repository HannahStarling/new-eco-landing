import "./tender.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { TenderContent } from "@/components/tender-component/tender-content";

export const Tender: FC = () => {
  return (
    <UiSection className="tender">
      <UiSectionTitle>
        <UiAccent>Находите оптимальный транспорт</UiAccent> на аукционе или
        тендере
      </UiSectionTitle>
      <TenderContent />
    </UiSection>
  );
};
