import { FC } from "react";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

interface IProps {}

export const MobileAppImage: FC<IProps> = () => {
  return (
    <div className={"mobile-app__image-container"}>
      <UiImage
        alt={"Мобильный телефон с изображением мобильного приложения  ИЛС."}
        name={ImageName.Smartphone}
      />
      <div className={"mobile-app__decorative-element"} />
    </div>
  );
};
