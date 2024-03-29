import "./implementing";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { FC } from "react";
import { Education } from "./education-component/education-component";
import { Incorporate } from "./incorporate-component/incorporate-component";

export const Implementing: FC = () => {
  return (
    <UiSection className="implementing">
      <Incorporate />
      <Education />
    </UiSection>
  );
};
