import "./integration-analysis.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { IntegrationAnalysisView } from "@/components/integration-analysis-component/integration-analysis-view";

export const IntegrationAnalysis: FC = () => {
  return (
    <UiSection className={"integration-analysis"}>
      <UiSectionTitle>
        Вы можете <UiAccent>кастомизировать доски с отчетами</UiAccent> для
        разных пользователей
      </UiSectionTitle>
      <IntegrationAnalysisView />
    </UiSection>
  );
};
