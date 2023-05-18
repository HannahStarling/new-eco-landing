import { IconName } from "@/ui-elements/ui-icon/icon-names";

export const MOBILE_APP_CARDS = [
  {
    icon: IconName.StatusAndTime,
    title: "Статус и время",
    text: "Контроль компанией текущего статуса и времени доставки заказа ",
    alt: "Песочные часы и шестеренка.",
    size: {
      width: 48,
      height: 64,
    },
  },
  {
    icon: IconName.DigitalSignature,
    title: "Электронная подпись",
    text: "Фиксация электронной подписи клиента",
    alt: "Иконка человека с примером подписи.",
    size: {
      width: 67,
      height: 64,
    },
  },
  {
    icon: IconName.Bill,
    title: "Электронные чеки",
    text: "Передача электронных версий чеков в налоговые органы в соответствии с 54-ФЗ",
    alt: "Чек.",
    size: {
      width: 85,
      height: 64,
    },
  },
];
