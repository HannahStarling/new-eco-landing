import UnitRegistration from "/public/assets/icons/UnitRegistration.svg";
import UnitRoute from "/public/assets/icons/UnitRoute.svg";
import UnitSearch from "/public/assets/icons/UnitSearch.svg";
import UnitMonitoring from "/public/assets/icons/UnitMonitoring.svg";
import UnitRecord from "/public/assets/icons/UnitRecord.svg";
import UnitReport from "/public/assets/icons/UnitReport.svg";
import UnitAllInOne from "/public/assets/icons/UnitAllInOne.svg";
import Logo from "/public/assets/logo.svg";

export const units = {
  column_1: [
    {
      serialNumber: "1-ый ",
      name: "сотрудник",
      data: [
        {
          icon: UnitRegistration,
          responsibility: "Учет заявок",
          icon_width: 34,
          icon_height: 44,
        },
      ],
    },
    {
      serialNumber: "2-ый ",
      name: "сотрудник",
      data: [
        {
          icon: UnitRoute,
          responsibility: "Планирование маршрутов",
          icon_width: 24,
          icon_height: 44,
        },
      ],
    },
    {
      serialNumber: "3-ый ",
      name: "сотрудник",
      data: [
        {
          icon: UnitSearch,
          responsibility: "Поиск перевозчика",
          icon_width: 37,
          icon_height: 44,
        },
      ],
    },

    {
      serialNumber: "4-ый ",
      name: "сотрудник",
      data: [
        {
          icon: UnitMonitoring,
          responsibility: "Мониторинг заявки",
          icon_width: 36,
          icon_height: 44,
        },
        {
          icon: UnitRecord,
          responsibility: "Ведение документации",
          icon_width: 37,
          icon_height: 44,
        },
      ],
    },
    {
      serialNumber: "5-ый ",
      name: "сотрудник",
      data: [
        {
          icon: UnitReport,
          responsibility: "Подготовка отчетов",
          icon_width: 36,
          icon_height: 44,
        },
      ],
    },
  ],
} as const;

export const LeftBlockData = {
  header: "Как сейчас",
  quantity: "5 специалистов ",
  description: "на одну цепочку заявок",
  units,
};

export const RightBlockData = {
  header: "Как станет",
  quantity: "Один сотрудник",
  description: "на одну цепочку заявок",
  caption:
    "* Нет потерь и расхождения данных при переходе от одной задачи в другую",
  leftResponsibilities: [
    "Создание заявок",
    "Мониторинг заявки",
    "Ведение документации",
  ],
  RightResponsibilities: [
    "Планирование маршрутов",
    "Поиск перевозчиков",
    "Подготовка отчетов",
  ],
  icon: {
    src: UnitAllInOne,
    width: 360,
    height: 283,
    alt: "Один сотрудник на одну цепочку заявок",
  },
  logo: {
    src: Logo,
    width: 168,
    height: 34,
    alt: "логотип",
  },
};
