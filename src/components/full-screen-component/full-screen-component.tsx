import { UiSection } from "@/ui-elements/ui-section/ui-section";
import "./styles.scss";
import classNames from "classnames";

export const FullScreen = ({ children }) => {
  return (
    <UiSection className={classNames("full-screen")}>{children}</UiSection>
  );
};
