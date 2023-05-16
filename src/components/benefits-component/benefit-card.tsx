import UiCard from "@/ui-elements/ui-card/ui-card";
import UiTitle, {TitleSize} from "@/ui-elements/ui-title/ui-title";
import UiAccent from "@/ui-elements/ui-accent/ui-accent";
import UiList, {ListType} from "@/ui-elements/ui-list/ui-list";
import UiListItem from "@/ui-elements/ui-list-item/ui-list-item";
import UiParagraph, {ParagraphSize} from "@/ui-elements/ui-paragraph/ui-paragraph";
import {IBenefitsArticle} from "@/components/benefits-component/benefits";

export const BenefitCard = ({accent, text, list}: {
  accent: IBenefitsArticle["accent"]
  text: IBenefitsArticle["text"]
  list: IBenefitsArticle["list"]
}) => {
  return (
    <UiCard>
      <UiTitle size={TitleSize.small}><UiAccent>{accent}</UiAccent>{text}</UiTitle>
      <UiList disc type={ListType.vertical}>
        {list.map((item) => (
          <UiListItem disc key={item}>
            <UiParagraph bold size={ParagraphSize.medium}>
              {item}
            </UiParagraph>
          </UiListItem>))}
      </UiList>
    </UiCard>
  );
};