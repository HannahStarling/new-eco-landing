"use client";

import { RefObject, useEffect, useState } from "react";

export const useHeaderScroll = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLElement>;
}) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const updateScrollDirection = () => {
      const headerTopPosition =
        headerRef.current?.getBoundingClientRect().bottom;
      if (headerTopPosition && window.pageYOffset >= headerTopPosition) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [headerRef]);

  return isScroll;
};
