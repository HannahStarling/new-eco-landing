import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiMainTitle } from "@/ui-elements/ui-main-title/ui-main-title";
import "./hero-component.scss";
import { GetAccessButtonComponent } from "@/components/buttons/get-access-button-component";

interface IProps {}

export const Hero: FC<IProps> = ({ ...props }) => {
  return (
    <UiSection className={"hero"}>
      <UiMainTitle>Платформа Intelogis для вашего бизнеса</UiMainTitle>
      <GetAccessButtonComponent hero uppercase={false} />
    </UiSection>
  );
};
