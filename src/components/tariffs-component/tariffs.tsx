import "./tariffs.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import { TariffsCard } from "@/components/tariffs-component/tariffs-card";

interface IProps {}

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

export type Cost = Record<Period, { price: number }> | string;

export interface ITariff {
  name: string;
  cost: Cost;
  includes: Array<Feature>;
}

export const TARIFFS_NAMES: Record<Feature, string> = {
  [Feature.Demand]: "Учет заявок",
  [Feature.PlannerILS]: "ТМС - ручной Планировщик ИЛС",
  [Feature.PlannerAutoILS]: "ТМС авто Планировщик ИЛС",
  [Feature.PlannerAutoVeeroute]: "ТМС авто Планировщик Вироут",
  [Feature.PlannerAutoYandex]: "ТМС авто Планировщик Яндекс",
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
      [Period.HalfYear]: { price: 499 },
      [Period.Decade]: { price: 499 },
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
      [Period.HalfYear]: { price: 499 },
      [Period.Decade]: { price: 499 },
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
      [Period.HalfYear]: { price: 499 },
      [Period.Decade]: { price: 499 },
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

const TARIFFS_LIST = Object.keys(TARIFFS);

export const Tariffs: FC<IProps> = ({ ...props }) => {
  return (
    <UiSection className="tariffs">
      <UiSectionTitle>Тарифы на Платформу</UiSectionTitle>
      <UiParagraph>
        Получаете доступ сразу к 7 сервисам и бесплатное обучение
      </UiParagraph>
      <UiParagraph>
        Настраиваем систему под работу вашей компании за 1-3 дня
      </UiParagraph>
      <UiParagraph> Оказываем единую техническую поддержку</UiParagraph>
      <UiParagraph>
        Можете использовать основные модули и при расширении бизнеса подключать
        остальные
      </UiParagraph>
      <UiList>
        {Object.keys(Period).map((tariff) => {
          return (
            <UiListItem key={tariff}>
              <UiButton>{PeriodName[tariff]}</UiButton>
            </UiListItem>
          );
        })}
      </UiList>
      <UiList className={"tariffs__cards"}>
        {TARIFFS_LIST.map((tariff) => {
          return (
            <UiListItem key={tariff} className={"tariffs__card"}>
              <TariffsCard tariff={tariff} />
            </UiListItem>
          );
        })}
      </UiList>
    </UiSection>
  );
};
