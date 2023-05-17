"use client";

import "./styles.scss";
import { FooterCopyrightComponent } from "./footer-copyright-component/footer-copyright-component";
import { FooterLogoComponent } from "./footer-logo-component/footer-logo-component";
import {
  MenuComponent,
  MenuPlacement,
} from "@/components/menu-component/menu-component";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <MenuComponent placement={MenuPlacement.footer} />
          <FooterLogoComponent />
          <FooterCopyrightComponent />
        </div>
      </div>
    </footer>
  );
};
