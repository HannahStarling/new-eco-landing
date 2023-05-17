import "./mobile-app.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";
import { CardSize, UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";

interface IProps {}

export const MOBILE_APP_CARDS = [
  {
    icon: IconName.StatusAndTime,
    title: "Статус и время",
    text: "Контроль компанией текущего статуса и времени доставки заказа ",
    alt: "Песочные часы и шестеренка.",
    size: {
      width: 48,
      height: 64,
    },
  },
  {
    icon: IconName.DigitalSignature,
    title: "Электронная подпись",
    text: "Фиксация электронной подписи клиента",
    alt: "Иконка человека с примером подписи.",
    size: {
      width: 67,
      height: 64,
    },
  },
  {
    icon: IconName.Bill,
    title: "Электронные чеки",
    text: "Передача электронных версий чеков в налоговые органы в соответствии с 54-ФЗ",
    alt: "Чек.",
    size: {
      width: 85,
      height: 64,
    },
  },
];

export const MobileApp: FC<IProps> = ({ ...props }) => {
  return (
    <UiSection className="mobile-app">
      <UiSectionTitle className={"mobile-app__title"}>
        Мобильное приложение<UiAccent> для водителей</UiAccent>
      </UiSectionTitle>
      <div className={"mobile-app__view"}>
        <UiImage
          alt={"Мобильный телефон с изображением мобильного приложения  ИЛС."}
          name={ImageName.Smartphone}
        />
        {/*<div className={"mobile-app__decorative-element"} />*/}
        <UiList className={"mobile-app__list"}>
          {MOBILE_APP_CARDS.map((card) => {
            return (
              <UiListItem key={card.icon}>
                <UiCard
                  className={"mobile-app__card"}
                  size={CardSize.extraLarge}
                >
                  <UiIcon
                    className={"mobile-app__card-icon"}
                    name={card.icon}
                    alt={card.alt}
                    size={card.size}
                  />
                  <UiTitle
                    className={"mobile-app__card-title"}
                    size={TitleSize.medium}
                  >
                    {card.title}
                  </UiTitle>
                  <UiParagraph size={ParagraphSize.small}>
                    {card.text}
                  </UiParagraph>
                </UiCard>
              </UiListItem>
            );
          })}
        </UiList>
      </div>
    </UiSection>
  );
};
