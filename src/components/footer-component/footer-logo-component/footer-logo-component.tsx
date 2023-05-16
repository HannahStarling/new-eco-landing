import { LogoSize } from "@/constants/image-sizes";
import Image from "next/image";

export const FooterLogoComponent = () => {
  return (
    <div className="footer__logo">
      <Image
        src="/assets/logo.svg"
        width={LogoSize.footer.width}
        height={LogoSize.footer.height}
        alt="логотип Intelogis"
      />
    </div>
  );
};
