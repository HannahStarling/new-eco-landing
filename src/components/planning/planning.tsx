import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import "./planning.scss";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { FC } from "react";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import Image from "next/image";
import { ServiceCard } from "@/components/service-card/service-card";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { FeatureCard } from "./feature-card";
import { ImageType } from "@/types/image";

const SERVICE_IMAGES = [
  {
    width: 128,
    height: 44,
    src: "/assets/images/Yandex.png",
    alt: "логотип Yandex",
  },
  {
    width: 128,
    height: 44,
    src: "/assets/images/Veeroute.png",
    alt: "логотип Veeroute",
  },
  {
    width: 128,
    height: 44,
    src: "/assets/images/ILS.png",
    alt: "логотип ILS",
  },
];

const FEATURE_INFO: Array<{
  title: string;
  img?: ImageType;
  text: string;
  accent?: string;
}> = [
  {
    title: "Валидация данных",
    img: {
      width: 29,
      height: 44,
      name: IconName.Validation,
      alt: "Валидация данных.",
    },
    text: "Система автоматически проверяет данные на ошибки",
  },
  {
    title: "Быстрое планирование",
    accent: "5 минут",
    text: "на 1000 заявок>",
  },
];

export const Planning: FC = () => {
  return (
    <UiSection className="planning">
      <UiSectionTitle>
        Планируете маршруты <UiAccent>с минимальными затратами </UiAccent> на
        ручные корректировки
      </UiSectionTitle>
      <div className="planning__content">
        <div className="planning__content-features">
          {FEATURE_INFO.map((item) => (
            <FeatureCard
              title={item.title}
              text={item.text}
              img={item.img}
              accent={item.accent}
              key={item.title}
            />
          ))}
        </div>
        <div className="planning__content-algorithms">
          <UiParagraph>Три алгоритма планирования на выбор</UiParagraph>
          {SERVICE_IMAGES.map((item) => (
            <ServiceCard
              key={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
        <Image
          className="planning__content-map"
          width={648}
          height={352}
          src="/assets/images/Planning.png"
          alt="Планировщик"
        />
      </div>
    </UiSection>
  );
};
