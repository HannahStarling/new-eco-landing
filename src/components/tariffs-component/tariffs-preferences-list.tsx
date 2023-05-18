import { FC } from "react";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { FOR_ALL_MEMBER_PREFERENCES } from "@/constants/tariffs";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";

interface IProps {}

export const TariffsPreferencesList: FC<IProps> = () => {
  return (
    <UiList
      className={"tariffs__preferences"}
      centered
      type={ListType.vertical}
    >
      {FOR_ALL_MEMBER_PREFERENCES.map((item) => (
        <UiListItem key={item}>
          <UiParagraph centered>{item}</UiParagraph>
        </UiListItem>
      ))}
    </UiList>
  );
};
