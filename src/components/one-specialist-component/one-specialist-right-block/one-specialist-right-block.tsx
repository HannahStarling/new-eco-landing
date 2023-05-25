import { Logo } from "@/constants/images";
import { RightBlockData } from "@/constants/one-specialist";
import Image from "next/image";

export const RightBlock = () => {
  return (
    <div className="one-specialist__right right">
      <div className="right__body">
        <div className="right__head">
          {RightBlockData.header}{" "}
          <Image src={Logo.header.black} alt={Logo.header.alt} />
        </div>
        <div className="right__border"></div>
        <div className="right__description">
          <span>{RightBlockData.quantity}&nbsp;</span>
          <span>{RightBlockData.description}</span>
        </div>
        <div className="right__caption">{RightBlockData.caption}</div>
        <div className="right__responsibilities responsibilities">
          <div className="responsibilities__left responsibility">
            {RightBlockData.leftResponsibilities.map(
              (responsibility, index) => {
                return (
                  <div
                    key={responsibility + index}
                    className="responsibility_l"
                  >
                    {responsibility}
                  </div>
                );
              }
            )}
          </div>
          <div className="responsibilities__center">
            <Image
              src={RightBlockData.icon.src}
              alt={RightBlockData.icon.alt}
            />
          </div>
          <div className="responsibilities__right responsibility">
            {RightBlockData.leftResponsibilities.map(
              (responsibility, index) => {
                return (
                  <div
                    key={responsibility + index}
                    className="responsibility_r"
                  >
                    {responsibility}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
