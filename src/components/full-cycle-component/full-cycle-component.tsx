import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import "./full-cycle-component.scss";
import { Color } from "@/types/color";
import Image from "next/image";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { Logo } from "@/constants/images";
import { fullCycleImages } from "./full-cycle-images";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";

const CYCLE_TEXT_LIST = [
  "Учет и ведение заявок",
  "Планирование маршрутов",
  "Поиск перевозчика",
  "Проверка контрагентов",
  "Отслеживание рейсов",
  "Электронный документооборот",
];

export const FullCycle = () => (
  <UiSection className="full-cycle">
    <UiSectionTitle>
      <UiAccent color={Color.greenMain}>
        Обеспечиваем полный цикл обработки задачи
      </UiAccent>
      <br /> от заведения заявки до получения отчета о доставке груза
    </UiSectionTitle>
    <UiParagraph className="full-cycle__addition">
      *Более 200 настроек для полной автоматизации процессов доставки с учетом
      всех особенностей бизнеса: клиенты, бизнес-процессы, сроки, машины
    </UiParagraph>
    <div className="full-cycle__scheme">
      <UiList type={ListType.vertical} disc>
        {CYCLE_TEXT_LIST.map((item) => (
          <UiListItem key={item} disc>
            {item}
          </UiListItem>
        ))}
      </UiList>
      <Image src={Logo.header.black} alt={Logo.header.alt} />
      <Image
        className="full-cycle__scheme-line-branch"
        src={fullCycleImages.LineBranch.src}
        alt={fullCycleImages.LineBranch.alt}
      />
      <div className="full-cycle__scheme-images">
        <UiCard>
          <Image
            src={fullCycleImages.CargoOwner.src}
            alt={fullCycleImages.CargoOwner.alt}
          />
          <UiParagraph>Грузовладелец</UiParagraph>
        </UiCard>
        <Image
          className="full-cycle__scheme-images__line"
          src={fullCycleImages.Line.src}
          alt={fullCycleImages.Line.alt}
        />
        <Image
          className="full-cycle__scheme-images__scheme"
          src={fullCycleImages.IntelogisCenter.src}
          alt={fullCycleImages.IntelogisCenter.alt}
        />
        <Image
          className="full-cycle__scheme-images__line"
          src={fullCycleImages.Line.src}
          alt={fullCycleImages.Line.alt}
        />
        <UiCard>
          <Image
            src={fullCycleImages.Carrier.src}
            alt={fullCycleImages.Carrier.alt}
          />
          <UiParagraph>Перевозчик</UiParagraph>
        </UiCard>
      </div>
    </div>
  </UiSection>
);
