import { FC } from "react";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { PLATFORM_MODULES_LIST } from "@/constants/texts";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";

interface IProps {}

export const PlatformModulesList: FC<IProps> = () => {
  return (
    <UiList style={{ maxWidth: 327, paddingLeft: 4 }} type={ListType.vertical}>
      <UiTitle
        style={{ lineHeight: "130%", paddingBottom: 44 }}
        size={TitleSize.medium}
      >
        Все&nbsp;сервисы&nbsp;для&nbsp;работы&nbsp;на одном&nbsp;экране
      </UiTitle>
      {PLATFORM_MODULES_LIST.map((item, i, array) => (
        <UiListItem
          style={{
            maxWidth: 231,
            paddingBottom: i === array.length - 1 ? 0 : 50,
          }}
          key={item}
        >
          <UiParagraph bold size={ParagraphSize.medium}>
            {item}
          </UiParagraph>
        </UiListItem>
      ))}
    </UiList>
  );
};
