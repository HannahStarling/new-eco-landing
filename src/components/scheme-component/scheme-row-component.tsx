import { IconBlock } from "./scheme-icon-block-component";
import { ProductBlock } from "./scheme-product-block-component";
import { SchemeBlock } from "@/constants/scheme";
import { SchemeValueType } from "@/types/scheme";
import { FC, PropsWithChildren } from "react";
import "./scheme-component.scss";

interface IProps {
  scheme: SchemeValueType<typeof SchemeBlock>;
}

export const SchemeRowComponent: FC<PropsWithChildren<IProps>> = ({
  scheme,
}) => {
  return (
    <div className="scheme__row">
      <IconBlock data={scheme.leftIcon} />
      <ProductBlock data={scheme.product} />
      <IconBlock data={scheme.rightIcon} />
    </div>
  );
};
