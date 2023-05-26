import { HEADER_CSS_SELECTOR } from "@/constants/general";
import { MouseEvent, SyntheticEvent, useState } from "react";

export const useMenu = (onBurgerClick: (isOpen?: boolean) => void) => {
  const [activeMenu, setActiveMenu] = useState<Record<string, boolean>>({});
  const handleSetActive = (e: SyntheticEvent, key: string | undefined) => {
    e.preventDefault();
    e.stopPropagation();
    key &&
      setActiveMenu((prev): Record<string, boolean> => {
        if (key in prev) {
          return {
            ...prev,
            [key]: !prev[key],
          };
        }
        return {
          ...prev,
          [key]: true,
        };
      });
  };

  const handleScroll = (e: SyntheticEvent) => {
    e.preventDefault();
    const elem = e.currentTarget as HTMLAnchorElement;
    const href = elem.href;
    const targetId = href.replace(/.*\#/, "");
    const headerOffset = document
      .querySelector(HEADER_CSS_SELECTOR)!
      .getBoundingClientRect().height;
    const elementPosition = document
      .getElementById(targetId)!
      .getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    onBurgerClick(true);
  };
  return {
    activeMenu,
    handleSetActive,
    handleScroll,
  };
};
