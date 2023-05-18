import { FC } from "react";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { CardSize, UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";
import { TENDER_CARDS } from "@/constants/cards";

export const TenderView: FC = () => {
  return (
    <div className={"tender__view"}>
      <UiList className={"tender__list"} type={ListType.vertical}>
        {TENDER_CARDS.map((card) => {
          return (
            <UiListItem key={card.icon}>
              <UiCard className={"tender__card"} size={CardSize.extraLarge}>
                <UiIcon name={card.icon} alt={card.alt} size={card.size} />
                <UiParagraph>{card.text}</UiParagraph>
              </UiCard>
            </UiListItem>
          );
        })}
      </UiList>
      <UiImage name={ImageName.Tender} alt={"Экран тендерной площадки."} />
    </div>
  );
};
