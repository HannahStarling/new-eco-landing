import { FooterCopyrightComponent } from "./footer-copyright-component/footer-copyright-component";
import { FooterLogoComponent } from "./footer-logo-component/footer-logo-component";
import { FooterMenuComponent } from "./footer-menu-component/footer-menu-component";
import "./styles.scss";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <FooterMenuComponent />
          <FooterLogoComponent />
          <FooterCopyrightComponent />
        </div>
      </div>
    </footer>
  );
};
