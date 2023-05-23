import "./contact.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiSocial } from "@/ui-elements/ui-social/ui-social";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { ContactForm } from "@/components/contact-component/contact-form";

export const Contact: FC = () => {
  return (
    <UiSection className={"contact"}>
      <UiSectionTitle className={"contact__title"}>
        Свяжитесь с нами, мы ответим на все ваши вопросы
      </UiSectionTitle>
      <UiList type={ListType.vertical} className={"contact__list"}>
        <UiListItem>
          <UiSocial
            alt={"Иконка скайп."}
            text={"roman.ils"}
            img={IconName.Skype}
          />
        </UiListItem>
        <UiListItem>
          <UiSocial
            alt={"Иконка конверта."}
            text={"info@intelogis.ru"}
            img={IconName.Email}
          />
        </UiListItem>
        <UiListItem>
          <UiSocial
            alt={"Иконка телефон."}
            text={"+7 (495) 989 96 09"}
            img={IconName.Phone}
          />
        </UiListItem>
        <UiListItem>
          <UiSocial
            alt={"Иконка Телеграмм."}
            text={"Телеграмм для приема заявок"}
            img={IconName.Telegram}
          />
        </UiListItem>
      </UiList>
      <ContactForm />
    </UiSection>
  );
};
