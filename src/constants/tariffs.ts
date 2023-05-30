export enum Feature {
  Demand = "Demand",
  PlannerILS = "PlannerILS",
  PlannerAutoILS = "PlannerAutoILS",
  PlannerAutoVeeroute = "PlannerVeeroute",
  PlannerAutoYandex = "PlannerYandex",
  Monitorig = "Monitorig",
  MobileApp = "MobileApp",
  TenderPlatform = "TenderPlatform",
  Documents = "Documents",
  Analytics = "Analytics",
}

export enum Period {
  Year = "Year",
  HalfYear = "HalfYear",
  Decade = "Decade",
}

export enum PeriodName {
  Year = "12 месяцев",
  HalfYear = "6 месяцев",
  Decade = "3 месяца",
}

export const PERIODS = Object.keys(Period) as Array<Period>;

export type Cost = Record<Period, { price: number }> | string;

export interface ITariff {
  name: string;
  cost: Cost;
  includes: Array<Feature>;
}

export const TARIFFS_NAMES: Record<Feature, string> = {
  [Feature.Demand]: "Учет заявок",
  [Feature.PlannerILS]: "ТМС - ручной Планировщик",
  [Feature.PlannerAutoILS]: "ТМС авто Планировщик (vol 1)",
  [Feature.PlannerAutoVeeroute]: "ТМС авто Планировщик (vol 2)",
  [Feature.PlannerAutoYandex]: "ТМС авто Планировщик (vol 3)",
  [Feature.Monitorig]: "Диспетчерский Мониторинг",
  [Feature.MobileApp]: "Мобильное приложение для Водителей",
  [Feature.TenderPlatform]: "Тендерная площадка",
  [Feature.Documents]: "ЭДО",
  [Feature.Analytics]: "Аналитика",
};

export const TARIFFS: Record<string, ITariff> = {
  Light: {
    name: "Лайт",
    cost: {
      [Period.Year]: { price: 499 },
      [Period.HalfYear]: { price: 549 },
      [Period.Decade]: { price: 699 },
    },
    includes: [
      Feature.Monitorig,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
  LightPlus: {
    name: "Лайт +",
    cost: {
      [Period.Year]: { price: 999 },
      [Period.HalfYear]: { price: 1099 },
      [Period.Decade]: { price: 1299 },
    },
    includes: [
      Feature.Demand,
      Feature.PlannerILS,
      Feature.Monitorig,
      Feature.MobileApp,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
  Standard: {
    name: "Стандарт",
    cost: {
      [Period.Year]: { price: 1499 },
      [Period.HalfYear]: { price: 1599 },
      [Period.Decade]: { price: 1799 },
    },
    includes: [
      Feature.Demand,
      Feature.PlannerILS,
      Feature.PlannerAutoILS,
      Feature.Monitorig,
      Feature.MobileApp,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
  Business: {
    name: "Бизнес",
    cost: "Персональный расчёт",
    includes: [
      Feature.Demand,
      Feature.PlannerILS,
      Feature.PlannerAutoVeeroute,
      Feature.Monitorig,
      Feature.MobileApp,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
  Profi: {
    name: "Профи",
    cost: "Персональный расчёт",
    includes: [
      Feature.Demand,
      Feature.PlannerILS,
      Feature.PlannerAutoYandex,
      Feature.Monitorig,
      Feature.MobileApp,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
  ProfiPlus: {
    name: "Профи +",
    cost: "Персональный расчёт",
    includes: [
      Feature.Demand,
      Feature.PlannerILS,
      Feature.PlannerAutoILS,
      Feature.PlannerAutoVeeroute,
      Feature.PlannerAutoYandex,
      Feature.Monitorig,
      Feature.MobileApp,
      Feature.TenderPlatform,
      Feature.Documents,
      Feature.Analytics,
    ],
  },
};

export const FOR_ALL_MEMBER_PREFERENCES = [
  "Получаете доступ сразу к 7 сервисам и бесплатное обучение",
  "Настраиваем систему под работу вашей компании за 1-3 дня",
  "Оказываем единую техническую поддержку",
  "Можете использовать основные модули и при расширении бизнеса подключать остальные",
];

export const TARIFFS_LIST = Object.keys(TARIFFS);

export const TARIFFS_FEATURES: Array<[Feature, string]> = Object.entries(
  TARIFFS_NAMES
) as Array<[Feature, string]>;
