"use client";

import { MOBILE_RESOLUTION } from "@/constants/general";
import { RefObject, useEffect, useState } from "react";

export const useHeaderScroll = ({
  headerRef,
}: {
  headerRef: RefObject<HTMLElement>;
}) => {
  const [isFixed, setFixedHeader] = useState(false);
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    setFixedHeader(window.innerWidth < MOBILE_RESOLUTION);
  }, []);

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

    const updateResize = () => {
      if (window.innerWidth < MOBILE_RESOLUTION) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    window.addEventListener("resize", updateResize);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      window.removeEventListener("resize", updateResize);
    };
  }, [headerRef]);

  return { isScroll, isFixed };
};
