import { TopBlock } from "../top-block-component/top-block";
import { TopPicture } from "../top-picture-component/top-picture";
import "./main-component.scss";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const MainComponent: FC<IProps> = ({ children }) => {
  return (
    <main className="main">
      <TopPicture>
        <TopBlock />
      </TopPicture>
      <div className="main__wrapper">{children}</div>
    </main>
  );
};
