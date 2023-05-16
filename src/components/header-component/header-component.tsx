import "./styles.scss";
import {HeaderLogoComponent} from "./header-logo-component/header-logo-component";
import {HeaderButtonComponent} from "./header-button-component/header-button-component";
import {MenuComponent} from "@/components/menu-component/menu-component";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <HeaderLogoComponent/>
      <MenuComponent/>
      <HeaderButtonComponent/>
    </header>
  );
};
