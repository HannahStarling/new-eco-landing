import "./styles.scss";
import { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

export const MainComponent: FC<IProps> = ({ children }) => {
  return (
    <main className="main">
      <div className="main__container">{children}</div>
    </main>
  );
};
