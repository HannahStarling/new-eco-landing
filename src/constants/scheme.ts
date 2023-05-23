export const SchemeIcons = {
  order: {
    text: "Заявка в вашей учетной системе",
    icon: "/assets/icons/SchemeOrder.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 59,
    height: 60,
  },
  route: {
    text: "Рассчитанные маршруты",
    icon: "/assets/icons/SchemeRoute.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 65,
    height: 60,
  },
  search: {
    text: "Найден исполнитель",
    icon: "/assets/icons/SchemeSearch.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 60,
    height: 60,
  },
  routelist: {
    text: "Маршрутные листы",
    icon: "/assets/icons/SchemeRouteList.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 46,
    height: 60,
  },
  contract: {
    text: "Договор-заявка, маршрутные листы, ТТН, приложения к договору",
    icon: "/assets/icons/SchemeContract.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 60,
    height: 60,
  },
  control: {
    text: "Контроль исполнения",
    icon: "/assets/icons/SchemeControl.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 64,
    height: 64,
  },
  act: {
    text: "Акты выполненных работ",
    icon: "/assets/icons/SchemeAct.svg",
    arrow: "/assets/icons/SchemeDownSm.svg",
    width: 60,
    height: 60,
  },
  history: {
    text: "История по всем рейсам + Ключевые метрики",
    icon: "/assets/icons/SchemeHistory.svg",
    arrow: null,
    width: 68,
    height: 64,
  },
  arrowDown: {
    text: null,
    icon: "/assets/icons/SchemeDownLg.svg",
    width: null,
    height: 182,
  },
} as const;

export const SchemeBlock = {
  system: {
    leftIcon: SchemeIcons.order,
    rightIcon: SchemeIcons.order,
    product: {
      name: "Система учета заявок",
      leftArrow: {
        text: "Импорт",
        icon: "/assets/icons/SchemeRight.svg",
      },
      rightArrow: {
        text: "Импорт",
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: "/assets/icons/SchemeDownSm.svg",
      className: "scheme__system scheme_center",
    },
  },
  tms: {
    leftIcon: {
      ...SchemeIcons.route,
      arrow: null,
    },
    rightIcon: SchemeIcons.route,
    product: {
      name: "TMS",
      leftArrow: {
        text: "Автопланирование",
        icon: "/assets/icons/SchemeLeft.svg",
      },
      rightArrow: {
        text: "Автопланирование",
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: "/assets/icons/SchemeDownSm.svg",
      className: "scheme__tms scheme_center",
    },
  },
  tender: {
    leftIcon: SchemeIcons.arrowDown,
    rightIcon: SchemeIcons.search,
    product: {
      name: "Тендерная площадка",
      leftArrow: null,
      rightArrow: {
        text: "Конкурс или аукцион",
        icon: "/assets/icons/SchemeRight.svg",
      },
      className: "scheme__tender scheme_center",
      downArrow: "/assets/icons/SchemeDownSm.svg",
    },
  },
  edo: {
    leftIcon: SchemeIcons.routelist,
    rightIcon: SchemeIcons.contract,
    product: {
      name: "ЭДО",
      leftArrow: {
        text: "Генерация документов из шаблонов",
        icon: "/assets/icons/SchemeLeft.svg",
      },
      rightArrow: {
        text: "Генерация документов из шаблонов",
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: "/assets/icons/SchemeDownSm.svg",
      className: "scheme__edo scheme_center",
    },
  },
  monitoring: {
    leftIcon: {
      ...SchemeIcons.control,
      arrow: null,
    },
    rightIcon: SchemeIcons.control,
    product: {
      name: "Мониторинг + Мобильное приложение",
      leftArrow: {
        text: "Передача данных в режиме 'онлайн'",
        icon: "/assets/icons/SchemeLeft.svg",
      },
      rightArrow: {
        text: "Передача данных в режиме 'онлайн'",
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: "/assets/icons/SchemeDownSm.svg",
      className: "scheme__monitoring scheme_center",
    },
  },
  edo2: {
    leftIcon: SchemeIcons.arrowDown,
    rightIcon: SchemeIcons.act,
    product: {
      name: "ЭДО",
      leftArrow: null,
      rightArrow: {
        text: "Генерация документов из шаблонов",
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: "/assets/icons/SchemeDownSm.svg",
      className: "scheme__edo2 scheme_center",
    },
  },
  analytics: {
    leftIcon: SchemeIcons.history,
    rightIcon: SchemeIcons.history,
    product: {
      name: "Аналитика",
      leftArrow: {
        text: null,
        icon: "/assets/icons/SchemeLeft.svg",
      },
      rightArrow: {
        text: null,
        icon: "/assets/icons/SchemeRight.svg",
      },
      downArrow: null,
      className: "scheme__analytics scheme_center",
    },
  },
} as const;

export const SchemeHeaderText = {
  left: "Есть свои или наемные автомобили",
  right: "Нет своих автомобилей",
};
