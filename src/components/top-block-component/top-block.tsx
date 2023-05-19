import "./top-block.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiMainTitle } from "@/ui-elements/ui-main-title/ui-main-title";
import { GetAccessButtonComponent } from "@/components/buttons/get-access-button/get-access-button-component";
import { PartnersDetailComponent } from "../partners-detail-component/partners-detail-component";

export const TopBlock: FC = () => {
  return (
    <UiSection className={"top"}>
      <UiMainTitle className={"top__head"}>
        Платформа Intelogis для вашего бизнеса
      </UiMainTitle>
      <PartnersDetailComponent />
      <GetAccessButtonComponent
        className={"top__access"}
        cover
        big
        uppercase={false}
      />
    </UiSection>
  );
};
