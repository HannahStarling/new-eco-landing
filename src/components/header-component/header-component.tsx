import "./styles.scss";
import { HeaderLogoComponent } from "./header-logo-component/header-logo-component";
import { HeaderMenuComponent } from "./header-menu-component/header-menu-component";
import { HeaderButtonComponent } from "./header-button-component/header-button-component";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <HeaderLogoComponent />
          <HeaderMenuComponent />
          <HeaderButtonComponent />
        </div>
      </div>
    </header>
  );
};
