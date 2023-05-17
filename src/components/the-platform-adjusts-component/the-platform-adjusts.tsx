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
import { ImageName, ImageSize } from "@/ui-elements/ui-image/image-names";

interface IProps {}

export const ThePlatformAdjusts: FC<IProps> = () => (
  <UiSection className="the-platform-adjusts">
    <UiSectionTitle>
      <UiAccent>Платформа подстраивается</UiAccent> под любые бизнес-процессы*
    </UiSectionTitle>
    <UiParagraph
      className={"the-platform-adjusts__sub"}
      size={ParagraphSize.extraLarge}
    >
      Система рассчитывает маршруты по&nbsp;13&nbsp;конфигурациям:
      по&nbsp;7&nbsp;основным и&nbsp;6 дополнительным
    </UiParagraph>
    <UiImage
      size={ImageSize[ImageName.Process]}
      name={ImageName.Process}
      alt={"Экран планировщика."}
    />
    <UiParagraph
      className={"the-platform-adjusts__footnote"}
      centered
      size={ParagraphSize.extraSmall}
    >
      *Проанализировали более 500 логистических
      бизнес&nbsp;-&nbsp;процессов&nbsp;и&nbsp;на основе их разработали
      конфигурации
    </UiParagraph>
  </UiSection>
);
