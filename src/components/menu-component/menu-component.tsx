"use client";
import { menu } from "@/constants/menu";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { UiList } from "@/ui-elements/ui-list/ui-list";
import "./styles.scss";
import { SubMenuComponent } from "./sub-menu-component/sub-menu-component";
import { FC } from "react";
import { useMenu } from "@/hooks/useMenu";
import classNames from "classnames";

export enum MenuPlacement {
  header = "header",
  footer = "footer",
}

interface IProps {
  placement?: MenuPlacement;
  isScroll?: boolean;
  isOpen?: boolean;
}

export const MenuComponent: FC<IProps> = ({
  placement = MenuPlacement.header,
  isOpen,
  isScroll,
}) => {
  const { activeMenu, handleSetActive } = useMenu();
  return (
    <nav
      className={classNames(
        `menu ${placement}__menu`,
        isOpen || isScroll ? "black" : null
      )}
    >
      <UiList className="menu__list">
        {Object.values(menu).map((menuItem, index) => {
          const key = menuItem.name + index;
          const itemClasses = !menuItem.children
            ? "menu__item item"
            : "menu__item item menu__item_submenu";
          return (
            <UiListItem
              key={key}
              className={classNames(
                itemClasses,
                activeMenu[key] ? "active" : null
              )}
              onClick={() => handleSetActive(key)}
            >
              {menuItem.name}
              {
                <SubMenuComponent
                  className={activeMenu[key] ? "active" : null}
                  menu={menuItem.children}
                />
              }
            </UiListItem>
          );
        })}
      </UiList>
    </nav>
  );
};
