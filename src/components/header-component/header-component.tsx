"use client";

import "./styles.scss";
import { HeaderLogoComponent } from "./header-logo-component/header-logo-component";
import { HeaderButtonComponent } from "./header-button-component/header-button-component";
import { MenuComponent } from "@/components/menu-component/menu-component";
import { useRef } from "react";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import classNames from "classnames";

export const HeaderComponent = () => {
  const headerRef = useRef<HTMLElement>(null);
  const isScroll = useHeaderScroll({ headerRef });

  return (
    <header
      ref={headerRef}
      className={classNames("header", isScroll ? "header_sticky" : null)}
    >
      <div className={"header__container"}>
        <HeaderLogoComponent />
        <MenuComponent />
        <HeaderButtonComponent />
      </div>
    </header>
  );
};
