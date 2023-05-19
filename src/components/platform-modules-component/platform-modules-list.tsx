import { FC } from "react";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { PLATFORM_MODULES_LIST } from "@/constants/texts";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";

export const PlatformModulesList: FC = () => {
  return (
    <UiList
      className={"platform-modules__view-column-list"}
      type={ListType.vertical}
    >
      {PLATFORM_MODULES_LIST.map((item, i) => (
        <UiListItem
          className={"platform-modules__view-column-list-item"}
          key={item}
        >
          <UiParagraph
            className={`platform-modules__view-column-list-item-paragraph platform-modules__view-column-list-item-paragraph_${i}`}
            bold
            size={ParagraphSize.medium}
          >
            {item}
          </UiParagraph>
        </UiListItem>
      ))}
    </UiList>
  );
};
