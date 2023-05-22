import { HEADER_CSS_SELECTOR } from "@/constants/general";
import { MouseEvent, useState } from "react";

export const useMenu = () => {
  const [activeMenu, setActiveMenu] = useState<Record<string, boolean>>({});
  const handleSetActive = (e: MouseEvent<HTMLAnchorElement>, key: string) => {
    e.preventDefault();
    e.stopPropagation();
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

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
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
  };
  return {
    activeMenu,
    handleSetActive,
    handleScroll,
  };
};
