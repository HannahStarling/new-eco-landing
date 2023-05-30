import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import "./monitoring-component.scss";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { FC } from "react";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import Image from "next/image";
import { MonitoringFeatures } from "./monitoring-features/monitoring-features";
import { MonitoringStatistics } from "./monitoring-statistics/monitoring-statistics";
import MonitoringImg from "/public/assets/images/Monitoring.png";
import MapImg from "/public/assets/images/Map.png";
import { Role } from "@/types/models";

export const Monitoring: FC = () => {
  return (
    <UiSection className="monitoring" id={Role.Carrier}>
      <UiSectionTitle>
        <UiAccent>Получаете план-фактный анализ на основе интеграции </UiAccent>
        с вашим сервисом мониторинга или внутри нашей платформы
      </UiSectionTitle>
      <Image src={MonitoringImg} alt="Мониторинг" />
      <div className="monitoring__info">
        <MonitoringFeatures />
        <Image className="monitoring__info-map" src={MapImg} alt="Карта" />
        <MonitoringStatistics />
      </div>
    </UiSection>
  );
};
