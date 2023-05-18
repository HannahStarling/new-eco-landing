import "./platform-modules.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { PlatformModulesView } from "@/components/platform-modules-component/platform-modules-view";

export const PlatformModules: FC = () => (
  <UiSection className="platform-modules">
    <UiSectionTitle>
      <UiAccent>Intelogis</UiAccent> - единая платформа управления транспортной
      логистикой
    </UiSectionTitle>
    <PlatformModulesView />
    <UiParagraph size={ParagraphSize.extraLarge}>
      Мы проводим обучение, доступ к которому останется навсегда и даем
      бесплатный тестовый период пользования платформой
    </UiParagraph>
  </UiSection>
);
