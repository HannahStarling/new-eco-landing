<<<<<<< HEAD
import { FC, PropsWithChildren } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import "./comment.scss";
=======
import { FC } from 'react';
import { UiCard } from '@/ui-elements/ui-card/ui-card';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { IconName } from '@/ui-elements/ui-icon/icon-names';
import './comment.scss';
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

type Color = 'green' | 'blue';

interface IProps {
  children?: React.ReactNode | React.ReactElement;
  color?: Color;
}

<<<<<<< HEAD
export const Comment: FC<PropsWithChildren<IProps>> = ({
  children,
  color = "green",
}) => {
=======
export const Comment: FC<IProps> = ({ children, color = 'green' }) => {
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a
  return (
    <UiCard className="comment">
      <UiIcon
        alt={'Аватар пользователя, который оставил отзыв.'}
        size={{ width: 53, height: 53 }}
        name={color === 'green' ? IconName.CommentAvatarGreen : IconName.CommentAvatarBlue}
      />
      {children}
    </UiCard>
  );
};
