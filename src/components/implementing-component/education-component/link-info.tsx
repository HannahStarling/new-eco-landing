import './link-info.scss';
import { FC } from 'react';
import { TitleSize, UiTitle } from '@/ui-elements/ui-title/ui-title';
import { UiButton } from '@/ui-elements/ui-button/ui-button';
import { ConnectModal } from '@/components/connect-modal/connect-modal';

interface IProps {
  text: string;
}

export const LinkInfo: FC<IProps> = ({ text }) => {
  return (
    <div className="link-info">
      <UiTitle size={TitleSize.medium}>{text}</UiTitle>
      <ConnectModal buttonText="Получить доступ к курсу" />
    </div>
  );
};
