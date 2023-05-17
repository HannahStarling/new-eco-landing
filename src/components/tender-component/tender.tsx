import "./tender.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { TenderContent } from "@/components/tender-component/tender-content";

interface IProps {}

export const TENDER_CARDS = [
  {
    icon: IconName.Cargo,
    text: "Выберите оптимального перевозчика из 10 000 авто, доступных на платформе",
    alt: "Грузовик.",
    size: {
      width: 48,
      height: 44,
    },
  },
  {
    icon: IconName.Trailer,
    text: "Снижение стоимости перевозки до 30%",
    alt: "Грузовая машина с открытым кузовом.",
    size: {
      width: 59,
      height: 44,
    },
  },
  {
    icon: IconName.Box,
    text: "Страхование ответственности",
    alt: "Коробка  в которую кладут документы.",
    size: {
      width: 39,
      height: 44,
    },
  },
];

export const Tender: FC<IProps> = ({ ...props }) => {
  return (
    <UiSection className="tender">
      <UiSectionTitle>
        <UiAccent>Находите оптимальный транспорт</UiAccent> на аукционе или
        тендере
      </UiSectionTitle>
      <TenderContent />
    </UiSection>
  );
};
