import "./comparison.scss";
import { FC } from "react";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { GetAccessButtonComponent } from "@/components/buttons/get-access-button/get-access-button-component";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

interface IProps {}

export const Comparison: FC<IProps> = () => {
  return (
    <UiSection className={"comparison"}>
      <UiSectionTitle>
        Отдельные сервисы есть у многих компаний,
        <UiAccent> но мы объединили их на одной платформе</UiAccent>
      </UiSectionTitle>
      <div className={"comparison__content"}>
        <UiImage
          name={ImageName.Comparison}
          alt={"Таблица со сравнением ИЛС и других аналогов."}
        />
        <GetAccessButtonComponent big uppercase={false} />
      </div>
    </UiSection>
  );
};
