import "./incorporate-component.scss";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { FC } from "react";
import { Color } from "@/types/color";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { StageCard } from "./stage-card";
import { StageInfo } from "./stage-info";

interface IProps {}

const CARDS_INFO = {
  DataAnalys: {
    title: "Сбор и анализ данных",
    text: ["Анкета", "Личная беседа", "Данные о фактических маршрутах"],
    img: {
      width: 81,
      height: 156,
      name: IconName.DataAnalys,
    },
  },
  Integration: {
    title: "Интеграция данных с помощью",
    text: ["API", "TXT", "Excel"],
    img: {
      width: 89,
      height: 110,
      name: IconName.Integration,
    },
  },
  Support: {
    title: "Настройка отчетов и техподдержка",
    text: ["Настроить редактируемые доски с отчетами"],
    img: {
      width: 102,
      height: 108,
      name: IconName.Support,
    },
  },
  SystemSetting: {
    title: "Настройка системы",
    text: [
      "Планирование маршрутов через алгоритмы Яндекс, Veeroute, ILS по 13 конфигурациям",
    ],
    img: {
      width: 78,
      height: 156,
      name: IconName.SystemSetting,
    },
  },
};

export const Incorporate: FC<IProps> = () => {
  return (
    <div className="incorporate">
      <UiSectionTitle>
        Внедрение платформы занимает
        <UiAccent color={Color.greenMain}> 7-10 дней</UiAccent>
      </UiSectionTitle>
      <UiParagraph className="incorporate__text">
        Внедрять Intelogis быстрее, так как работаем по модели SaaS Аналогичные
        решения внедряются от 1 месяца
      </UiParagraph>
      <div className="incorporate__stages">
        <StageInfo accent="01" text="Пилотное внедрение, 1-3 дня" />
        <StageCard
          title={CARDS_INFO.DataAnalys.title}
          text={CARDS_INFO.DataAnalys.text}
          img={CARDS_INFO.DataAnalys.img}
        />
        <StageCard
          title={CARDS_INFO.SystemSetting.title}
          text={CARDS_INFO.SystemSetting.text}
          img={CARDS_INFO.SystemSetting.img}
        />
        <StageInfo accent="02" text="Полноценное внедрение, 5-7 дней" />
        <StageCard
          title={CARDS_INFO.Integration.title}
          text={CARDS_INFO.Integration.text}
          img={CARDS_INFO.Integration.img}
        />
        <StageCard
          title={CARDS_INFO.Support.title}
          text={CARDS_INFO.Support.text}
          img={CARDS_INFO.Support.img}
        />
      </div>
    </div>
  );
};
