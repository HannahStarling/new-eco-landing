"use client";

import "./styles.scss";
import classNames from "classnames";

export const FullScreen = ({ children }) => {
  return <div className={classNames("full-screen")}>{children}</div>;
};
