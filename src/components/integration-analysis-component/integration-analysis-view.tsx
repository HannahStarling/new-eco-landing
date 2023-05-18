import { FC } from "react";
import { IntegrationAnalysisCards } from "@/components/integration-analysis-component/integration-analysis-cards";
import { IntegrationAnalysisImages } from "@/components/integration-analysis-component/integration-analysis-images";

export const IntegrationAnalysisView: FC = () => {
  return (
    <div className={"integration-analysis__view"}>
      <IntegrationAnalysisCards />
      <IntegrationAnalysisImages />
    </div>
  );
};
