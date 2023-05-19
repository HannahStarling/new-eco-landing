import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import classNames from "classnames";
import Link from "next/link";
import { FC, MouseEvent } from "react";

interface IProps {
  className?: string | null;
  menu?: Record<string, { name: string; sectionID: string }> | null;
  handleScroll: (e: MouseEvent<HTMLAnchorElement, MouseEvent<any>>) => void;
}

export const SubMenuComponent: FC<IProps> = ({
  className,
  menu,
  handleScroll,
}) => {
  if (!menu) return null;
  return (
    <UiList
      type={ListType.vertical}
      className={classNames("submenu submenu__list", className)}
    >
      {Object.values(menu).map((menuItem, index) => (
        <UiListItem
          key={menuItem.name + index}
          className={"submenu__subitem subitem"}
        >
          {menuItem?.sectionID ? (
            <Link href={menuItem.sectionID} onClick={handleScroll}>
              <span className="subitem__name">{menuItem.name}</span>
            </Link>
          ) : (
            <span className="subitem__name">{menuItem.name}</span>
          )}
        </UiListItem>
      ))}
    </UiList>
  );
};
