import { FC } from 'react';
import classNames from 'classnames';
import { IconName } from '@/ui-elements/ui-icon/icon-names';
import { UiIcon } from '../ui-icon/ui-icon';
import { UiParagraph } from '../ui-paragraph/ui-paragraph';
import './ui-social.scss';

export type Props = {
  className?: string;
  img: IconName;
  text?: string;
};

export const UiSocial: FC<Props> = ({ className, img, text }) => {
  return (
    <div className={classNames('social', className)}>
      <UiIcon size={32} name={img} />
      <UiParagraph>{text}</UiParagraph>
    </div>
  );
};
