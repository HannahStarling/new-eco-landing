import "./mobile-app.scss";
import { FC } from "react";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { MobileAppView } from "@/components/mobile-app-component/mobile-app-view";

export const MobileApp: FC = () => {
  return (
    <UiSection className="mobile-app">
      <UiSectionTitle className={"mobile-app__title"}>
        Мобильное приложение<UiAccent> для водителей</UiAccent>
      </UiSectionTitle>
      <MobileAppView />
    </UiSection>
  );
};
