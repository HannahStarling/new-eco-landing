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
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return {
    activeMenu,
    handleSetActive,
    handleScroll,
  };
};
