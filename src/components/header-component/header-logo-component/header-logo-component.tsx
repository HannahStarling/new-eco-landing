import {Logo} from "@/constants/images";
import Image from "next/image";

export const HeaderLogoComponent = () => {
  return (
    <Image
      src={Logo.header.src}
      width={Logo.header.width}
      height={Logo.header.height}
      alt={Logo.header.alt}
    />
  );
};
