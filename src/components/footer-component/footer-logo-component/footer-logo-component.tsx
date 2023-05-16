import { LogoSize } from "@/constants/images";
import Image from "next/image";

export const FooterLogoComponent = () => {
  return (
    <div className="footer__logo">
      <Image
        src={LogoSize.footer.src}
        width={LogoSize.footer.width}
        height={LogoSize.footer.height}
        alt={LogoSize.footer.alt}
      />
    </div>
  );
};
