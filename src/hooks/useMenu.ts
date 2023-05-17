import { useState } from "react";

export const useMenu = () => {
  const [activeMenu, setActiveMenu] = useState<{ [k: string]: boolean }>({});
  const handleSetActive = (key: string) => {
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
  return {
    activeMenu,
    handleSetActive,
  };
};
