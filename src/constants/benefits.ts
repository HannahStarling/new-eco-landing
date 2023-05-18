import {BenefitsArticle} from "@/components/benefits-component/benefits-article";
import {CARGO_OWNER_LIST, CARRIER_CHIPS_LIST, CARRIER_LIST,} from "@/constants/texts";

//TODO types
export enum Role {
  Carrier = "Carrier",
  CargoOwner = "CargoOwner",
}

export interface IBenefitsArticle {
  title: string;
  accent: string;
  text: string;
  list: Array<string>;
  chips?: {
    title: string;
    list: Array<string>;
  };
}

export const BENEFITS_ARTICLES: Array<Role> = [Role.CargoOwner, Role.Carrier];

export const BENEFITS_ARTICLE: Record<Role, BenefitsArticle> = {
  [Role.Carrier]: {
    title: "Перевозчикам",
    accent: "1 специалист ведет 50-100 авто",
    text: " вместо 10-20, как раньше",
    list: CARRIER_LIST,
    chips: {
      title: "Компании сокращают штат и зарабатывают больше за счёт экономии",
      list: CARRIER_CHIPS_LIST,
    },
  },
  [Role.CargoOwner]: {
    title: "Грузовладельцам",
    accent: "1 специалист вместо 5 человек",
    text: " ведет всю цепочку заявок от заведения заявки до отчета о доставке груза",
    list: CARGO_OWNER_LIST,
  },
};
