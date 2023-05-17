import { FC } from 'react';
import { UiCard } from '@/ui-elements/ui-card/ui-card';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { IconName } from '@/ui-elements/ui-icon/icon-names';
import './comment.scss';

type Color = 'green' | 'blue';

type Props = {
  children?: any;
  color?: Color;
};

export const Comment: FC<Props> = ({ children, color = 'green' }) => {
  return (
    <UiCard className="comment">
      {color === 'green' ? (
        <UiIcon size={53} name={IconName.CommentAvatarGreen} />
      ) : (
        <UiIcon size={53} name={IconName.CommentAvatarBlue} />
      )}
      {children}
    </UiCard>
  );
};
