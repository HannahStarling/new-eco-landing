import { Logo } from "@/constants/images";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  isScroll: boolean;
  isOpen: boolean;
}

export const HeaderLogoComponent: FC<IProps> = ({ isScroll, isOpen }) => {
  return (
    <div className="header__logo">
      <Image
        src={isScroll || isOpen ? Logo.header.black : Logo.header.white}
        width={Logo.header.width}
        height={Logo.header.height}
        alt={Logo.header.alt}
      />
    </div>
  );
};
