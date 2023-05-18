import { FC } from "react";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { Color } from "@/types/color";

interface IProps {
  price: number;
}

export const TariffPrice: FC<IProps> = ({ price }) => {
  return (
    <>
      ₽{" "}
      <UiAccent bold color={Color.typographyMain}>
        {price}
      </UiAccent>
      <UiAccent color={Color.typographyMedium}> /в месяц</UiAccent>
    </>
  );
};
