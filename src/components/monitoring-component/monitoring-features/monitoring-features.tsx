import "./monitoring-features.scss";
import { FC } from "react";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { FeatureCard } from "./feature-card";
import { ServiceCard } from "@/components/service-card/service-card";

const GPS_IMAGES = [
  {
    width: 135,
    height: 26,
    src: "/assets/images/Wialon.png",
    alt: "логотип Wialon",
  },
  {
    width: 135,
    height: 11,
    src: "/assets/images/Omnicomm.png",
    alt: "логотип Omnicomm",
  },
];

const FEATURES_INFO = [
  {
    title: "Отображение рейса автомобиля и статуса выполнения заявки",
    list: [],
    img: { width: 26, height: 44, name: IconName.Location },
  },
  {
    title:
      "Анализ выполняемых заявок позволяет контролировать и снижать расходы на доставку",
    list: [
      "Анализ отклонений от маршрута",
      "Анализ неразвезенных заявок",
      "Анализ безопасности дорожного движения",
    ],
    img: { width: 47, height: 44, name: IconName.LocationAnalysis },
  },
];

export const MonitoringFeatures: FC = () => {
  return (
    <div className="monitoring-features">
      <div className="monitoring-features__gps">
        {GPS_IMAGES.map((item) => (
          <ServiceCard
            width={item.width}
            height={item.height}
            src={item.src}
            alt={item.alt}
            key={item.src}
          />
        ))}
      </div>
      <div className="monitoring-features__feature">
        {FEATURES_INFO.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            list={item.list}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};
