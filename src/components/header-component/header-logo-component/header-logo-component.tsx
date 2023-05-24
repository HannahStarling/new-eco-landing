import { Logo } from "@/constants/images";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import whiteLogo from "/public/assets/logoWhite.svg";
import blackLogo from "/public/assets/logo.svg";

interface IProps {
  isWhiteHeader: boolean;
}

export const HeaderLogoComponent: FC<PropsWithChildren<IProps>> = ({
  isWhiteHeader,
}) => {
  const src = isWhiteHeader ? blackLogo : whiteLogo;
  return (
    <div className="header__logo">
      <Image src={src} alt={Logo.header.alt} />
    </div>
  );
};
