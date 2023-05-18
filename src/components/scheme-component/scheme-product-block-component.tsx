import { SchemeBlock } from "@/constants/scheme";
import { SchemeValueType } from "@/types/scheme";
import classNames from "classnames";
import { FC } from "react";

interface IProps {
  data: SchemeValueType<Pick<SchemeValueType<typeof SchemeBlock>, "product">>;
}

export const ProductBlock: FC<IProps> = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="scheme__product product">
      <div className="product__body">
        <div className="product__left left">
          <div className="left__arrow">
            <img src={data.leftArrow?.icon} />
          </div>
          <div className="left__description">{data.leftArrow?.text}</div>
        </div>
        <div className={classNames("product__description", data.className)}>
          {data.name}
        </div>
        <div className="product__right right">
          <div className="right__arrow">
            <img src={data.rightArrow?.icon} />
          </div>
          <div className="right__description">{data.leftArrow?.text}</div>
        </div>
      </div>
      <div className="product__down">
        <img src={data.downArrow} />
      </div>
    </div>
  );
};
