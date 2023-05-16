import { LogoSize } from "@/constants/image-sizes";
import Image from "next/image";

export const HeaderLogoComponent = () => {
  return (
    <Image
      src="/assets/logo.svg"
      width={LogoSize.header.width}
      height={LogoSize.header.height}
      alt="логотип Intelogis"
    />
  );
};
