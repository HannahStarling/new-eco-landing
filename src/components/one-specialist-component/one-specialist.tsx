import { UiSection } from "@/ui-elements/ui-section/ui-section";
import "./one-specialist.scss";
import { FC } from "react";
import { LeftBlock } from "./one-specialist-left-block/one-specialist-left-block";
import { RightBlock } from "./one-specialist-right-block/one-specialist-right-block";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";

export const OneSpecialist: FC = () => {
  return (
    <UiSection className="one-specialist">
      <UiSectionTitle>
        <UiAccent>Один специалист</UiAccent> может вести всю цепочку заявок
      </UiSectionTitle>
      <div className="one-specialist__body">
        <LeftBlock />
        <RightBlock />
      </div>
    </UiSection>
  );
};
