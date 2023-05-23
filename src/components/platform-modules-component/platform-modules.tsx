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
import { GetAccessButtonComponent } from "@/components/buttons/get-access-button/get-access-button-component";

export const PlatformModules: FC = () => (
  <UiSection className="platform-modules">
    <UiSectionTitle>
      <UiAccent>Intelogis</UiAccent> - единая платформа управления транспортной
      логистикой
    </UiSectionTitle>
    <PlatformModulesView />
    <UiParagraph
      className={"platform-modules__description"}
      size={ParagraphSize.extraLarge}
    >
      Мы&nbsp;проводим обучение, доступ к&nbsp;которому останется навсегда
      и&nbsp;даем бесплатный тестовый период пользования платформой
    </UiParagraph>
    <GetAccessButtonComponent
      className={"platform-modules__button"}
      full
      mode={"light"}
      fillType={"filled"}
    >
      Получить тестовый доступ
    </GetAccessButtonComponent>
  </UiSection>
);
