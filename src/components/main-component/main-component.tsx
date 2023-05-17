import "./styles.scss";
import { FC } from "react";

export const MainComponent: FC = ({ children }) => {
  return (
    <main className="main">
      <div className="main__container">{children}</div>
    </main>
  );
};
