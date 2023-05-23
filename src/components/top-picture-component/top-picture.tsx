import { UiSection } from "@/ui-elements/ui-section/ui-section";
import "./top-picture.scss";
import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

interface IProps {}

export const TopPicture: FC<PropsWithChildren<IProps>> = ({ children }) => {
  return (
    <UiSection fullWidth className={classNames("top-picture")}>
      {children}
    </UiSection>
  );
};
