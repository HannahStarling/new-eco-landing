import "./monitoring-statistics.scss";
import { FC } from "react";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { Color } from "@/types/color";

export const MonitoringStatistics: FC = () => {
  return (
    <UiCard className="monitoring-statistics">
      <div className="monitoring-statistics__region">
        <UiTitle
          className="monitoring-statistics__region-title"
          size={TitleSize.extraSmall}
        >
          Статистика по регионам
        </UiTitle>
        <UiIcon
          name={IconName.RegionStatistics}
          alt="Статистика по регионам"
          size={{ width: 312, height: 76 }}
        />
      </div>
      <div className="monitoring-statistics__mileage">
        <div className="monitoring-statistics__mileage-autopark">
          <UiTitle size={TitleSize.extraSmall}>Пробег автопарка</UiTitle>
          <UiParagraph size={ParagraphSize.extraSmall}>
            <UiAccent>842,3</UiAccent> тыс. км
          </UiParagraph>
        </div>
        <div className="monitoring-statistics__mileage-average">
          <UiTitle size={TitleSize.extraSmall}>Средний пробег</UiTitle>
          <UiParagraph size={ParagraphSize.extraSmall}>
            <UiAccent color={Color.blueDark}>1600</UiAccent> км
          </UiParagraph>
        </div>
      </div>

      <UiTitle size={TitleSize.extraSmall}>
        Виды нарушений на разных типах дорог
      </UiTitle>
      <UiIcon
        name={IconName.ViolationStatistics}
        alt="Статистика нарушений"
        size={{ width: 312, height: 170 }}
      />
    </UiCard>
  );
};
