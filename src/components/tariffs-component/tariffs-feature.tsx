import { FC, PropsWithChildren } from "react";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { Color } from "@/types/color";

interface IProps {
  include: boolean;
  title: string;
}

export const TariffsFeature: FC<PropsWithChildren<IProps>> = ({
  include,
  title,
}) => {
  return (
    <UiListItem className={"tariffs__card-list-item"}>
      <UiIcon
        className={"tariffs__card-list-icon"}
        size={{ width: 10.5, height: 8.5 }}
        name={
          include ? IconName.CheckMarkSuperDark : IconName.CheckMarkMediumLight
        }
        alt={"Галочка."}
      />
      <UiParagraph size={ParagraphSize.extraSmall}>
        <UiAccent color={include ? Color.typographyMain : Color.superLight}>
          {title}
        </UiAccent>
      </UiParagraph>
    </UiListItem>
  );
};
