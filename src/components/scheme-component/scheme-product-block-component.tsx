import { SchemeBlock } from "@/constants/scheme";
import { SchemeValueType } from "@/types/scheme";
import classNames from "classnames";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface IProps {
  data: SchemeValueType<Pick<SchemeValueType<typeof SchemeBlock>, "product">>;
}

export const ProductBlock: FC<PropsWithChildren<IProps>> = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="scheme__product product">
      <div className="product__body">
        <div className="product__left left">
          {data.leftArrow?.icon && (
            <div className="left__arrow">
              <Image
                alt={"Стрелка, показывает влево."}
                src={data.leftArrow?.icon}
              />
            </div>
          )}
          <div className="left__description">{data.leftArrow?.text}</div>
        </div>
        <div className={classNames("product__description", data.className)}>
          <span>{data.name}</span>
        </div>
        <div className="product__right right">
          <div className="right__arrow">
            <Image
              alt={"Стрелка, показывает вправо."}
              src={data.rightArrow?.icon}
            />
          </div>
          <div className="right__description">{data.leftArrow?.text}</div>
        </div>
      </div>
      {data.downArrow && (
        <div className="product__down">
          <Image alt={"Стрелка, показывает вниз."} src={data.downArrow} />
        </div>
      )}
    </div>
  );
};
