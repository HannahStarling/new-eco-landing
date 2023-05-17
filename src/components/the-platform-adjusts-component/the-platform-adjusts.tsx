import "./the-platform-adjusts.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

interface IProps {}

export const ThePlatformAdjusts: FC<IProps> = () => (
  <UiSection className="the-platform-adjusts">
    <UiSectionTitle>
      <UiAccent>Платформа подстраивается</UiAccent> под любые бизнес-процессы*
    </UiSectionTitle>
    <UiParagraph size={ParagraphSize.extraLarge}>
      Система рассчитывает маршруты по 13 конфигурациям: по 7 основным и 6
      дополнительным
    </UiParagraph>
    <UiImage
      size={{
        width: 1128,
        height: 549,
      }}
      name={ImageName.Process}
      alt={"Экран планировщика."}
    />
    <UiParagraph centered size={ParagraphSize.extraSmall}>
      *Проанализировали более 500 логистических бизнес-процессов и на основе их
      разработали конфигурации
    </UiParagraph>
  </UiSection>
);
