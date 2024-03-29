import { Logo } from "@/constants/images";
import { SchemeHeaderText } from "@/constants/scheme";
import Image from "next/image";

export const SchemeHeaderComponent = () => {
  return (
    <div className="scheme-head">
      <div className="scheme-head__body">
        <div className="scheme-head__left">
          <span className="scheme-head__text scheme-head__text_left">
            {SchemeHeaderText.left}
          </span>
          <span className="scheme-head__border" />
        </div>
        <div className="scheme-head__center">
          <Image src={Logo.header.black} alt={Logo.header.alt} />
        </div>
        <div className="scheme-head__right">
          <span className="scheme-head__text scheme-head__text_right">
            {SchemeHeaderText.right}
          </span>
          <span className="scheme-head__border" />
        </div>
      </div>
    </div>
  );
};
