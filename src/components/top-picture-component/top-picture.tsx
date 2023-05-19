import { UiSection } from "@/ui-elements/ui-section/ui-section";
import "./top-picture.scss";
import classNames from "classnames";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const TopPicture: FC<IProps> = ({ children }) => {
  return (
    <UiSection fullWidth className={classNames("top-picture")}>
      {children}
    </UiSection>
  );
};
