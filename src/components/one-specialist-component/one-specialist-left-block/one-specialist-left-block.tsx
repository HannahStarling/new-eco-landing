import { FC, PropsWithChildren } from "react";
import { LeftBlockData } from "@/constants/one-specialist";
import { OneSpecialistUnit } from "../one-specialist-unit-block/one-specialist-unit";

interface IProps {}

export const LeftBlock: FC<PropsWithChildren<IProps>> = () => {
  return (
    <div className="one-specialist__left left">
      <div className="left__body">
        <div className="left__head">{LeftBlockData.header}</div>
        <div className="left__border"></div>
        <div className="left__description">
          <span>{LeftBlockData.quantity}</span>
          <span>{LeftBlockData.description}</span>
        </div>
        <div className="left__units unit">
          {Object.entries(LeftBlockData.units).map(([column, unitsData]) => {
            return (
              <>
                {unitsData.map((unit, index) => {
                  return (
                    <OneSpecialistUnit
                      key={unit.serialNumber + index}
                      unitData={unit}
                    />
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
