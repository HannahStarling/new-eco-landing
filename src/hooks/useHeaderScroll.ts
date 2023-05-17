"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export const useHeaderScroll = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLElement>;
}) => {
  const isScroll = useRef(false);
  useEffect(() => {
    const updateScrollDirection = () => {
      const headerTopPosition =
        headerRef.current?.getBoundingClientRect().bottom;
      if (headerTopPosition && window.pageYOffset >= headerTopPosition) {
        isScroll.current = true;
      } else {
        isScroll.current = false;
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [headerRef]);

  return isScroll;
};
