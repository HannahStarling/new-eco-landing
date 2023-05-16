import { LogoSize } from "@/constants/images";
import Image from "next/image";

export const HeaderLogoComponent = () => {
  return (
    <Image
      src={LogoSize.header.src}
      width={LogoSize.header.width}
      height={LogoSize.header.height}
      alt={LogoSize.header.alt}
    />
  );
};
