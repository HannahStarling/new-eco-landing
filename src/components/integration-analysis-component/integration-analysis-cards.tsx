import { FC } from "react";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { INTEGRATION_ANALYSIS_CARDS } from "@/constants/cards";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { CardSize, UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";

export const IntegrationAnalysisCards: FC = () => {
  return (
    <UiList className={"integration-analysis__list"} type={ListType.vertical}>
      {INTEGRATION_ANALYSIS_CARDS.map((card) => {
        return (
          <UiListItem key={card.icon}>
            <UiCard
              className={"integration-analysis__card"}
              size={CardSize.extraLarge}
            >
              <UiIcon name={card.icon} alt={card.alt} size={card.size} />
              <UiParagraph>{card.text}</UiParagraph>
            </UiCard>
          </UiListItem>
        );
      })}
    </UiList>
  );
};
