import { SchemeBlock } from "@/constants/scheme";
import { EMPTY_STRING } from "@/constants/texts";
import { SchemeValueType } from "@/types/scheme";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface IProps {
  data: SchemeValueType<
    Pick<SchemeValueType<typeof SchemeBlock>, "rightIcon" | "leftIcon">
  >;
}

export const IconBlock: FC<PropsWithChildren<IProps>> = ({ data }) => {
  if (!data.text)
    return (
      <div className="scheme__icon_empty">
        <Image src={data.icon} alt={"Заглушка."} />
      </div>
    );
  return (
    <div className="scheme__icon icon">
      <div className="icon__block">
        <Image src={data.icon} alt={data.text ?? EMPTY_STRING} />
        <span>{data.text}</span>
      </div>
      <div className="icon__arrow">
        {data.arrow ? <Image src={data.arrow} alt={"Стрелка."} /> : null}
      </div>
    </div>
  );
};
