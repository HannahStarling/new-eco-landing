import "./EDO.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { Color } from "@/types/color";

interface IProps {}

export const Edo: FC<IProps> = () => {
  return (
    <UiSection className="edo">
      <UiSectionTitle className="edo__title">
        Заменяете стандартные бумажные документы
        <UiAccent> на электронный документооборот</UiAccent>
      </UiSectionTitle>
      <UiCard className="edo__card edo__card_description">
        <UiIcon
          size={{ width: 49, height: 64 }}
          name={IconName.Document}
          alt={"Документ."}
        />
        <UiParagraph>
          Используя ЭДО, вы&nbsp;снижаете затраты на&nbsp;обработку бумажных
          документов, их&nbsp;печать, хранение и&nbsp;пересылку, на&nbsp;офисную
          технику и&nbsp;расходные материалы
        </UiParagraph>
      </UiCard>
      <UiCard className="edo__card edo__card_percent">
        <UiParagraph size={ParagraphSize.extraLarge}>
          Экономия достигает
        </UiParagraph>
        <UiParagraph className="edo__paragraph edo__paragraph_percent">
          <UiAccent color={Color.blue}>до 80%</UiAccent>
        </UiParagraph>
      </UiCard>
      <UiImage
        className="edo__image edo__image_module"
        name={ImageName.Edo}
        alt={""}
      />
      <UiImage
        className="edo__image edo__image_view"
        name={ImageName.EdoView}
        alt={""}
      />
    </UiSection>
  );
};
