"use client";

import "./styles.scss";
import classNames from "classnames";
import Image from "next/image";

export const FullScreen = ({ children }) => {
  return (
    <div className={classNames("full-screen")}>
      <Image
        src="/assets/images/cover.jpg"
        alt="Платформа Intelogis для вашего бизнеса"
        width="1440"
        height="616"
        quality="100"
        layout="responsive"
        objectFit="contain"
      />
      {children}
    </div>
  );
};
