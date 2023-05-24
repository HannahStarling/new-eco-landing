<<<<<<< HEAD
import {
  CARGO_OWNER_LIST,
  CARRIER_CHIPS_LIST,
  CARRIER_LIST,
} from "@/constants/texts";
import { IBenefitsArticle, Role } from "@/types/models";
=======
import { CARGO_OWNER_LIST, CARRIER_CHIPS_LIST, CARRIER_LIST } from '@/constants/texts';
import { IBenefitsArticle, Role } from '@/types/models';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

export const BENEFITS_ARTICLES: Array<Role> = [Role.CargoOwner, Role.Carrier];

export const BENEFITS_ARTICLE: Record<Role, IBenefitsArticle> = {
  [Role.Carrier]: {
    title: 'Перевозчикам',
    accent: '1 специалист ведет 50-100 авто',
    text: ' вместо 10-20, как раньше',
    list: CARRIER_LIST,
    chips: {
      title: 'Компании сокращают штат и зарабатывают больше за счёт экономии',
      list: CARRIER_CHIPS_LIST,
    },
  },
  [Role.CargoOwner]: {
    title: 'Грузовладельцам',
    accent: '1 специалист вместо 5 человек',
    text: ' ведет всю цепочку заявок от заведения заявки до отчета о доставке груза',
    list: CARGO_OWNER_LIST,
  },
};
