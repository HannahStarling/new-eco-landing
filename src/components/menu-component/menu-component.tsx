import { menu } from "@/constants/menu";
import UiListItem from "@/ui-elements/ui-list-item/ui-list-item";
import UiList from "@/ui-elements/ui-list/ui-list";
import Image from "next/image";
import "./styles.scss";
import { SubMenuComponent } from "./sub-menu-component/sub-menu-component";

export const MenuComponent = () => {
  return (
    <UiList className="menu__list">
      {Object.values(menu).map((menuItem, index) => (
        <UiListItem
          key={menuItem.name + index}
          className={
            !menuItem.children
              ? "menu__item item"
              : "menu__item item menu__item_submenu"
          }
        >
          {menuItem.name}
          {<SubMenuComponent menu={menuItem.children} />}
        </UiListItem>
      ))}
    </UiList>
  );
};
