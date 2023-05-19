import './get-access-button-component.scss';
import { FC } from 'react';
import { UiButton, UiButtonProps } from '@/ui-elements/ui-button/ui-button';
import { BUTTONS_CONTENT } from '@/constants/texts';
import classNames from 'classnames';
import { ConnectModal } from '@/components/connect-modal/connect-modal';

interface IProps extends UiButtonProps {
  big?: boolean;
  full?: boolean;
  uppercase?: boolean;
  cover?: boolean;
}

export const GetAccessButtonComponent: FC<IProps> = ({
  big = false,
  full = false,
  cover = false,
  uppercase = true,
  className,
}) => {
  return (
    <ConnectModal
      className={classNames(
        'button-get-access',
        {
          big,
          full,
          uppercase,
          cover__button: cover,
        },
        className,
      )}
      buttonText={BUTTONS_CONTENT.GET_ACCESS.toUpperCase()}
    />
  );
};
