import { FC } from "react";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import { PlatformModulesList } from "@/components/platform-modules-component/platform-modules-list";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";

export const PlatformModulesView: FC = () => {
  return (
    <div className={"platform-modules__view"}>
      <div className={"platform-modules__view-column"}>
        <UiTitle
          className={"platform-modules__view-column-title"}
          size={TitleSize.medium}
        >
          Все&nbsp;сервисы&nbsp;для&nbsp;работы&nbsp;на одном&nbsp;экране
        </UiTitle>
        <PlatformModulesList />
      </div>
      <UiImage
        className={"platform-modules__view-image"}
        name={ImageName.PlatformModules}
        alt={"Модули приложения."}
      />
    </div>
  );
};
