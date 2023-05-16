import {TitleSize, UiTitle} from "@/ui-elements/ui-title/ui-title";
import {AccentColor, UiAccent} from "@/ui-elements/ui-accent/ui-accent";
import {UiList} from "@/ui-elements/ui-list/ui-list";
import {BUTTONS_CONTENT} from "@/constants/texts";
import {UiListItem} from "@/ui-elements/ui-list-item/ui-list-item";
import {UiChips} from "@/ui-elements/ui-chips/ui-chips";
import {UiButton} from "@/ui-elements/ui-button/ui-button";
import {UiArticle} from "@/ui-elements/ui-article/ui-article";
import {IBenefitsArticle} from "@/components/benefits-component/benefits";
import {BenefitCard} from "@/components/benefits-component/benefit-card";
import {ParagraphSize, UiParagraph} from "@/ui-elements/ui-paragraph/ui-paragraph";

//TODO replace style by class
export const BenefitsArticle = ({title, accent, text, list, chips}: IBenefitsArticle) => {
  return (<UiArticle className={'benefits__article'}>
    <UiTitle size={TitleSize.extraLarge}>
      <UiAccent color={AccentColor.presentation}>
        {title}
      </UiAccent>
    </UiTitle>
    <BenefitCard accent={accent} text={text} list={list}/>
    {chips && (
      <>
        <UiTitle bold={false}>{chips.title}</UiTitle>
        <UiList style={{gap: 24}}>
          {chips.list.map(chips => {
            return <UiListItem key={chips}>
              <UiChips>
                <UiParagraph style={{color: 'white'}} bold centered size={ParagraphSize.large}>{chips}</UiParagraph>
              </UiChips>
            </UiListItem>
          })}
        </UiList>
      </>)}
    {/*TODO button width*/}
    <UiButton mode={"dark"} fillType={'outlined'}>{BUTTONS_CONTENT.GET_ACCESS}</UiButton>
  </UiArticle>)
}
