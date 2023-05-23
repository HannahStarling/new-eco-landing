import { units } from "@/constants/one-specialist";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface IProps {
  unitData: (typeof units)[keyof typeof units][number];
}

export const OneSpecialistUnit: FC<PropsWithChildren<IProps>> = ({
  unitData,
}) => {
  return (
    <div className="unit__single">
      <div className="unit__head">
        <span>{unitData.serialNumber}</span>
        <span>{unitData.name}</span>
      </div>
      <div className="unit__desc">
        {unitData.data.map((iconData, index) => {
          return (
            <div className="unit__data" key={iconData.responsibility + index}>
              <div className="unit__ico">
                <Image
                  src={iconData.icon}
                  alt={iconData.responsibility}
                  width={iconData.icon_width}
                  height={iconData.icon_height}
                />
              </div>
              <div className="unit__reponsibility">
                {iconData.responsibility}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
