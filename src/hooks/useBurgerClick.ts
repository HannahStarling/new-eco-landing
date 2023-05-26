"use client";

import { useState } from "react";

export const useBurger = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onBurgerClick = (isOpen?: boolean) => {
    setOpen((prev) => {
      return isOpen ? false : !prev;
    });
  };

  return {
    isOpen,
    onBurgerClick,
  };
};
