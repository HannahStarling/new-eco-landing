import { SchemeBlock } from "@/constants/scheme";
import { EMPTY_STRING } from "@/constants/texts";
import { SchemeValueType } from "@/types/scheme";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  data: SchemeValueType<
    Pick<SchemeValueType<typeof SchemeBlock>, "rightIcon" | "leftIcon">
  >;
}

export const IconBlock: FC<IProps> = ({ data }) => {
  if (!data.text)
    return (
      <div className="scheme__icon_empty">
        <img src={data.icon} alt={"Заглушка."} />
      </div>
    );
  return (
    <div className="scheme__icon icon">
      <div className="icon__block">
        <Image
          src={data.icon}
          alt={data.text ?? EMPTY_STRING}
          width={data.width ?? 0}
          height={data.height}
        />
        <span>{data.text}</span>
      </div>
      <div className="icon__arrow">
        {data.arrow ? <img src={data.arrow} alt={"Стрелка."} /> : null}
      </div>
    </div>
  );
};
