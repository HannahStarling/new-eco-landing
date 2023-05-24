import { TopBlock } from "../top-block-component/top-block";
import { TopPicture } from "../top-picture-component/top-picture";
import "./main-component.scss";
import { FC, PropsWithChildren } from "react";

interface IProps {}

export const MainComponent: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return (
    <main className="main">
      <TopPicture>
        <TopBlock />
      </TopPicture>
      <div className="main__wrapper">{children}</div>
    </main>
  );
};
