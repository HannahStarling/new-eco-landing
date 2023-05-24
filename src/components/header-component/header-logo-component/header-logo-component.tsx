import { Logo } from "@/constants/images";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";

interface IProps {
  isWhiteHeader: boolean;
}

export const HeaderLogoComponent: FC<PropsWithChildren<IProps>> = ({
  isWhiteHeader,
}) => {
  return (
    <div className="header__logo">
      <Image
        src={isWhiteHeader ? Logo.header.black : Logo.header.white}
        width={Logo.header.width}
        height={Logo.header.height}
        alt={Logo.header.alt}
      />
    </div>
  );
};
