export const units = {
  column_1: [
    {
      serialNumber: "1-ый ",
      name: "сотрудник",
      data: [
        {
          icon: "/assets/icons/UnitRegistration.svg",
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
          icon: "/assets/icons/UnitRoute.svg",
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
          icon: "/assets/icons/UnitSearch.svg",
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
          icon: "/assets/icons/UnitMonitoring.svg",
          responsibility: "Мониторинг заявки",
          icon_width: 36,
          icon_height: 44,
        },
        {
          icon: "/assets/icons/UnitRecord.svg",
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
          icon: "/assets/icons/UnitReport.svg",
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
    src: "/assets/icons/UnitAllInOne.svg",
    width: 360,
    height: 283,
    alt: "Один сотрудник на одну цепочку заявок",
  },
  logo: {
    src: "/assets/icons/logo.svg",
    width: 168,
    height: 34,
    alt: "логотип",
  },
};
