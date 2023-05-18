import './link-info.scss';
import { FC } from 'react';
import { TitleSize, UiTitle } from '@/ui-elements/ui-title/ui-title';
import { UiButton } from '@/ui-elements/ui-button/ui-button';

interface IProps {
  text: string;
}

export const LinkInfo: FC<IProps> = ({ text }) => {
  return (
    <div className="link-info">
      <UiTitle size={TitleSize.medium}>{text}</UiTitle>
      <UiButton mode="dark" fillType="outlined">
        Получить доступ к курсу
      </UiButton>
    </div>
  );
};
