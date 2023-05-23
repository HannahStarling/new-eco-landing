import { FC } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { Color } from "@/types/color";
import { IBenefitsArticle } from "@/types/models";

interface IProps {
  accent: IBenefitsArticle["accent"];
  text: IBenefitsArticle["text"];
  list: IBenefitsArticle["list"];
}

export const BenefitCard: FC<IProps> = ({ accent, text, list }) => {
  return (
    <UiCard>
      <UiTitle size={TitleSize.small}>
        <UiAccent color={Color.blue}>{accent}</UiAccent>
        {text}
      </UiTitle>
      <UiList disc type={ListType.vertical}>
        {list.map((item) => (
          <UiListItem disc key={item}>
            <UiParagraph bold size={ParagraphSize.medium}>
              {item}
            </UiParagraph>
          </UiListItem>
        ))}
      </UiList>
    </UiCard>
  );
};
