"use client";

import { RefObject, useEffect, useState } from "react";

export const useHeaderScroll = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLElement>;
}) => {
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const updateScrollDirection = () => {
      const headerTopPosition =
        headerRef.current?.getBoundingClientRect().bottom;
      //TODO deprecated symbol
      if (headerTopPosition && window.pageYOffset >= headerTopPosition) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [headerRef]);

  return isScroll;
};
