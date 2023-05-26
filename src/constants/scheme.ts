import SchemeOrder from "/public/assets/icons/SchemeOrder.svg";
import SchemeDownSm from "/public/assets/icons/SchemeDownSm.svg";
import SchemeSearch from "/public/assets/icons/SchemeSearch.svg";
import SchemeRoute from "/public/assets/icons/SchemeRoute.svg";
import SchemeRouteList from "/public/assets/icons/SchemeRouteList.svg";
import SchemeContract from "/public/assets/icons/SchemeContract.svg";
import SchemeControl from "/public/assets/icons/SchemeControl.svg";
import SchemeAct from "/public/assets/icons/SchemeAct.svg";
import SchemeHistory from "/public/assets/icons/SchemeHistory.svg";
import SchemeDownLg from "/public/assets/icons/SchemeDownLg.svg";
import SchemeRight from "/public/assets/icons/SchemeRight.svg";
import SchemeLeft from "/public/assets/icons/SchemeLeft.svg";

export const SchemeIcons = {
  order: {
    text: "Заявка в вашей учетной системе",
    icon: SchemeOrder,
    arrow: SchemeDownSm,
    width: 59,
    height: 60,
  },
  route: {
    text: "Рассчитанные маршруты",
    icon: SchemeRoute,
    arrow: SchemeDownSm,
    width: 65,
    height: 60,
  },
  search: {
    text: "Найден исполнитель",
    icon: SchemeSearch,
    arrow: SchemeDownSm,
    width: 60,
    height: 60,
  },
  routelist: {
    text: "Маршрутные листы",
    icon: SchemeRouteList,
    arrow: SchemeDownSm,
    width: 46,
    height: 60,
  },
  contract: {
    text: "Договор-заявка, маршрутные листы, ТТН, приложения к договору",
    icon: SchemeContract,
    arrow: SchemeDownSm,
    width: 60,
    height: 60,
  },
  control: {
    text: "Контроль исполнения",
    icon: SchemeControl,
    arrow: SchemeDownSm,
    width: 64,
    height: 64,
  },
  act: {
    text: "Акты выполненных работ",
    icon: SchemeAct,
    arrow: SchemeDownSm,
    width: 60,
    height: 60,
  },
  history: {
    text: "История по всем рейсам + Ключевые метрики",
    icon: SchemeHistory,
    arrow: null,
    width: 68,
    height: 64,
  },
  arrowDown: {
    text: null,
    icon: SchemeDownLg,
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
        icon: SchemeRight,
      },
      rightArrow: {
        text: "Импорт",
        icon: SchemeRight,
      },
      downArrow: SchemeDownSm,
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
        icon: SchemeLeft,
      },
      rightArrow: {
        text: "Автопланирование",
        icon: SchemeRight,
      },
      downArrow: SchemeDownSm,
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
        icon: SchemeRight,
      },
      className: "scheme__tender scheme_center",
      downArrow: SchemeDownSm,
    },
  },
  edo: {
    leftIcon: SchemeIcons.routelist,
    rightIcon: SchemeIcons.contract,
    product: {
      name: "ЭДО",
      leftArrow: {
        text: "Генерация документов из шаблонов",
        icon: SchemeLeft,
      },
      rightArrow: {
        text: "Генерация документов из шаблонов",
        icon: SchemeRight,
      },
      downArrow: SchemeDownSm,
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
        icon: SchemeLeft,
      },
      rightArrow: {
        text: "Передача данных в режиме 'онлайн'",
        icon: SchemeRight,
      },
      downArrow: SchemeDownSm,
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
        icon: SchemeRight,
      },
      downArrow: SchemeDownSm,
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
        icon: SchemeLeft,
      },
      rightArrow: {
        text: null,
        icon: SchemeRight,
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
