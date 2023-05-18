import { Cover } from "../cover-component/cover";
import { FullScreen } from "../full-screen-component/full-screen-component";
import "./styles.scss";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const MainComponent: FC<IProps> = ({ children }) => {
  return (
    <main className="main">
      <FullScreen>
        <Cover />
      </FullScreen>
      <div className="main__container">{children}</div>
    </main>
  );
};
