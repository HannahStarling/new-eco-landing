import { FC, PropsWithChildren } from "react";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { Color } from "@/types/color";

interface IProps {
  price: number;
}

export const TariffsPrice: FC<PropsWithChildren<IProps>> = ({ price }) => {
  return (
    <>
      ₽{" "}
      <UiAccent bold color={Color.typographyMain}>
        {price}
      </UiAccent>
      <UiAccent color={Color.typographyMedium}>
        {" "}
        /в&nbsp;месяц (за&nbsp;одну машину)
      </UiAccent>
    </>
  );
};
