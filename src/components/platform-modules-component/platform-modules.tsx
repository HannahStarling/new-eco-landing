import "./platform-modules.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";

export const PRESENTATION_LIST = [
  "Управление заявками на перевозку",
  "Планирование маршрута",
  "Отслеживание рейсов и грузов",
  "Тендерная площадка",
  "Электронные документы",
  "Библиотека редактируемых досок с отчетами для разных пользователей",
];

export const PlatformModules: FC = () => (
  <UiSection className="platform-modules">
    <UiSectionTitle>
      <UiAccent>Intelogis</UiAccent> - единая платформа управления транспортной
      логистикой
    </UiSectionTitle>
    <div style={{ display: "flex" }}>
      <UiIcon
        name={IconName.ListDots}
        size={{ width: 29, height: 540 }}
        alt={"Маркеры-пункты списка."}
      />
      <UiList
        style={{ maxWidth: 327, paddingLeft: 4 }}
        type={ListType.vertical}
      >
        <UiTitle
          style={{ lineHeight: "130%", paddingBottom: 23 }}
          size={TitleSize.medium}
        >
          Все&nbsp;сервисы&nbsp;для&nbsp;работы&nbsp;на одном&nbsp;экране
        </UiTitle>
        {PRESENTATION_LIST.map((item, i, array) => (
          <UiListItem
            style={{
              maxWidth: 231,
              paddingBottom: i === array.length - 1 ? 0 : 46,
            }}
            key={item}
          >
            <UiParagraph bold size={ParagraphSize.medium}>
              {item}
            </UiParagraph>
          </UiListItem>
        ))}
      </UiList>
      <UiImage
        size={{
          width: 744,
          height: 537,
        }}
        name={ImageName.PlatformModule}
        alt={"Модули приложения."}
      />
    </div>
    <UiParagraph size={ParagraphSize.extraLarge}>
      Мы проводим обучение, доступ к которому останется навсегда и даем
      бесплатный тестовый период пользования платформой
    </UiParagraph>
  </UiSection>
);
