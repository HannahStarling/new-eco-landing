import { FC } from "react";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { PlatformModulesList } from "@/components/platform-modules-component/platform-modules-list";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

interface IProps {}

export const PlatformModulesView: FC<IProps> = () => {
  return (
    <div className={"platform-modules__view"}>
      <UiIcon
        name={IconName.ListDots}
        size={{ width: 29, height: 540 }}
        alt={"Маркеры-пункты списка."}
      />
      <PlatformModulesList />
      <UiImage name={ImageName.PlatformModules} alt={"Модули приложения."} />
    </div>
  );
};
