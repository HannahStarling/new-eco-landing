import "./styles.scss";
import { FC } from "react";

export const MainComponent: FC = ({ children }) => {
  return <main className="main main__container">{children}</main>;
};
