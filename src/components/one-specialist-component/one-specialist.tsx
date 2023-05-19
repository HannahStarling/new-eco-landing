import { UiSection } from "@/ui-elements/ui-section/ui-section";
import "./one-specialist.scss";
import { FC } from "react";
import { LeftBlock } from "./one-specialist-left-block/one-specialist-left-block";
import { RightBlock } from "./one-specialist-right-block/one-specialist-right-block";

export const OneSpecialist: FC = () => {
  return (
    <UiSection className="one-specialist">
      <LeftBlock />
      <RightBlock />
    </UiSection>
  );
};
