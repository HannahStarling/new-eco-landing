import "./the-platform-adjusts.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { ThePlatformAdjustsContent } from "@/components/the-platform-adjusts-component/the-platform-adjusts-content";

export const ThePlatformAdjusts: FC = () => (
  <UiSection className="the-platform-adjusts">
    <UiSectionTitle>
      <UiAccent>Платформа подстраивается</UiAccent> под любые бизнес-процессы*
    </UiSectionTitle>
    <ThePlatformAdjustsContent />
  </UiSection>
);
