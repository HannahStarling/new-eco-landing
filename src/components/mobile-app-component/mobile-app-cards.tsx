import { FC } from "react";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import { MOBILE_APP_CARDS } from "@/constants/mobile-app";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { CardSize, UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";

interface IProps {}

export const MobileAppCards: FC<IProps> = () => {
  return (
    <UiList className={"mobile-app__list"}>
      {MOBILE_APP_CARDS.map((card) => {
        return (
          <UiListItem key={card.icon}>
            <UiCard className={"mobile-app__card"} size={CardSize.extraLarge}>
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
              <UiParagraph size={ParagraphSize.small}>{card.text}</UiParagraph>
            </UiCard>
          </UiListItem>
        );
      })}
    </UiList>
  );
};
