import {TitleSize, UiTitle} from "@/ui-elements/ui-title/ui-title";
import {UiAccent} from "@/ui-elements/ui-accent/ui-accent";
import {UiList} from "@/ui-elements/ui-list/ui-list";
import {UiListItem} from "@/ui-elements/ui-list-item/ui-list-item";
import {UiChips} from "@/ui-elements/ui-chips/ui-chips";
import {UiArticle} from "@/ui-elements/ui-article/ui-article";
import {IBenefitsArticle} from "@/components/benefits-component/benefits";
import {BenefitCard} from "@/components/benefits-component/benefit-card";
import {Color} from "@/types/color";
import {GetAccessButtonComponent} from "@/components/buttons/get-access-button-component";

//TODO replace style by class
export const BenefitsArticle = ({
  title,
  accent,
  text,
  list,
  chips,
}: IBenefitsArticle) => {
  return (
    <UiArticle className={"benefits__article"}>
      <UiTitle size={TitleSize.extraLarge}>
        <UiAccent color={Color.greenMain}>{title}</UiAccent>
      </UiTitle>
      <BenefitCard accent={accent} text={text} list={list} />
      {chips && (
        <>
          <UiTitle bold={false}>{chips.title}</UiTitle>
          <UiList style={{ gap: 24 }}>
            {chips.list.map((chips, i, array) => {
              return (
                <UiListItem key={chips}>
                  <UiChips big={i === array.length - 1}>{chips}</UiChips>
                </UiListItem>
              );
            })}
          </UiList>
        </>
      )}
      <GetAccessButtonComponent />
    </UiArticle>
  );
};
