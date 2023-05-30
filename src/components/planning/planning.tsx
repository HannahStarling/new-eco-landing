import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import "./planning.scss";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { FC } from "react";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { FeatureCard } from "./feature-card";
import { ImageType } from "@/types/image";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

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
          <UiImage
            className={"planning__content-map"}
            name={ImageName.Planning}
            alt={"Экран Планировщика."}
          />
        </div>
      </div>
    </UiSection>
  );
};
