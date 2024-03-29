import "./link-info.scss";
import { FC, PropsWithChildren } from "react";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { ConnectModal } from "@/components/connect-modal/connect-modal";

interface IProps {
  text: string;
}

export const LinkInfo: FC<PropsWithChildren<IProps>> = ({ text }) => {
  return (
    <div className="link-info">
      <UiTitle size={TitleSize.medium}>{text}</UiTitle>
      <ConnectModal buttonText="Получить доступ к курсу" />
    </div>
  );
};
