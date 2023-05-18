import { FC } from "react";
import { MobileAppImage } from "@/components/mobile-app-component/mobile-app-image";
import { MobileAppCards } from "@/components/mobile-app-component/mobile-app-cards";

export const MobileAppView: FC = () => {
  return (
    <div className={"mobile-app__view"}>
      <MobileAppImage />
      <MobileAppCards />
    </div>
  );
};
