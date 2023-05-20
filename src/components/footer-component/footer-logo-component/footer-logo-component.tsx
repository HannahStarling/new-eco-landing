import { Logo } from "@/constants/images";
import Image from "next/image";

export const FooterLogoComponent = () => {
  return (
    <div className="footer__logo">
      <Image
        src={Logo.footer.src}
        width={Logo.footer.width}
        height={Logo.footer.height}
        alt={Logo.footer.alt}
      />
    </div>
  );
};
