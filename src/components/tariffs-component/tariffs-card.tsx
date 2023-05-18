import { FC } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiTitle } from "@/ui-elements/ui-title/ui-title";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiButton } from "@/ui-elements/ui-button/ui-button";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import {
  Period,
  TARIFFS,
  TARIFFS_NAMES,
} from "@/components/tariffs-component/tariffs";
import { Color } from "@/types/color";

interface IProps {
  tariff: string;
  period?: Period;
}

export const TariffsCard: FC<IProps> = ({ tariff, period = Period.Year }) => {
  const { cost, name, includes } = TARIFFS[tariff];
  const isPersonal = typeof cost === "string";

  return (
    <UiCard className={"tariffs__card-content"}>
      <UiTitle>{name}</UiTitle>
      <UiList type={ListType.vertical} className={"tariffs__card-list"}>
        {Object.entries(TARIFFS_NAMES).map(([key, title]) => {
          const k = includes.includes(key);
          return (
            <UiListItem key={key} className={"tariffs__card-list-item"}>
              <UiIcon
                className={"tariffs__card-list-icon"}
                size={{ width: 10.5, height: 8.5 }}
                name={
                  k
                    ? IconName.CheckMarkSuperDark
                    : IconName.CheckMarkMediumLight
                }
                alt={"Галочка."}
              />
              <UiParagraph size={ParagraphSize.extraSmall}>
                <UiAccent
                  color={k ? Color.typographyMain : Color.neutralsLight}
                >
                  {title}
                </UiAccent>
              </UiParagraph>
            </UiListItem>
          );
        })}
      </UiList>
      <UiParagraph>
        {isPersonal ? (
          cost
        ) : (
          <>
            ₽{" "}
            <UiAccent bold color={Color.typographyMain}>
              {cost[period].price}
            </UiAccent>
            <UiAccent color={Color.typographyMedium}> /в месяц</UiAccent>
          </>
        )}
      </UiParagraph>
      <UiButton style={{ width: "100%" }}>Связаться</UiButton>
    </UiCard>
  );
};
