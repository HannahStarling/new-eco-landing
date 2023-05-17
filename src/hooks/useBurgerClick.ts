"use client";

import { useState } from "react";

export const useBurger = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onBurgerClick = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return {
    isOpen,
    onBurgerClick,
  };
};
