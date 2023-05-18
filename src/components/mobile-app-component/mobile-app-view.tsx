import { FC } from "react";
import { MobileAppImage } from "@/components/mobile-app-component/mobile-app-image";
import { MobileAppCards } from "@/components/mobile-app-component/mobile-app-cards";

interface IProps {}

export const MobileAppView: FC<IProps> = () => {
  return (
    <div className={"mobile-app__view"}>
      <MobileAppImage />
      <MobileAppCards />
    </div>
  );
};
