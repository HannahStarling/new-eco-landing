import { SyntheticEvent, useState } from "react";

export const useMenu = () => {
  const [activeMenu, setActiveMenu] = useState<{ [k: string]: boolean }>({});
  const handleSetActive = (
    e: React.MouseEvent<HTMLAnchorElement, any>,
    key: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMenu((prev) => {
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

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, any>) => {
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
