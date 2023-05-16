import "./benefits.scss";
import UiSection from "@/ui-elements/ui-section/ui-section";
import UiSectionTitle from "@/ui-elements/ui-section-title/ui-section-title";
import {CARGO_OWNER_LIST, CARRIER_CHIPS_LIST, CARRIER_LIST} from "@/constants/texts";
import {BenefitsArticle} from "@/components/benefits-component/benefits-article";

export enum Role {
  Carrier = 'Carrier',
  CargoOwner = 'CargoOwner',
}

export interface IBenefitsArticle {
  title: string
  accent: string
  text: string
  list: Array<string>
  chips?: {
    title: string
    list: Array<string>
  }
}

export const SECTION_TITLES = {
  Benefits: 'Транспортным компаниям и грузовладельцам выгодно, когда все в “одном окне”'
}
const BENEFITS_ARTICLES: Array<Role> = [Role.CargoOwner, Role.Carrier]

const BENEFITS_ARTICLE: Record<Role, BenefitsArticle> = {
  [Role.Carrier]: {
    title: 'Перевозчикам',
    accent: '1 специалист ведет 50-100 авто',
    text: ' вместо 10-20, как раньше',
    list: CARRIER_LIST,
    chips: {
      title: 'Компании сокращают штат и зарабатывают больше за счёт экономии',
      list: CARRIER_CHIPS_LIST
    }
  },
  [Role.CargoOwner]: {
    title: 'Грузовладельцам',
    accent: '1 специалист вместо 5 человек',
    text: ' ведет всю цепочку заявок от заведения заявки до отчета о доставке груза',
    list: CARGO_OWNER_LIST
  },
}

export const Benefits = () => {
  return (
    <UiSection>
      <UiSectionTitle>{SECTION_TITLES.Benefits}</UiSectionTitle>
      {BENEFITS_ARTICLES.map(article => {
        const {text, title, accent, list, chips} = BENEFITS_ARTICLE[article]
        return <BenefitsArticle key={article} title={title} text={text} accent={accent} chips={chips} list={list}/>
      })}
    </UiSection>
  );
};
