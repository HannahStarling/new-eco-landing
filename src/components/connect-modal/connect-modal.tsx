'use client';

import { useModal } from '@/hooks/useModal';
import './connect-modal.scss';
import { FC } from 'react';
import { UiButton } from '@/ui-elements/ui-button/ui-button';
import { UiModal } from '@/ui-elements/ui-modal-window/ui-modal-window';
import classNames from 'classnames';
import { ContactUsFormView } from '@/views/contact-us-form-view';
import { Mode, FillType } from '@/ui-elements/ui-button/types';

interface IProps {
  className?: string;
  buttonText: string | React.ReactNode | React.ReactElement;
  mode?: Mode;
  fillType?: FillType;
}

export const ConnectModal: FC<IProps> = ({
  className,
  buttonText,
  mode = 'dark',
  fillType = 'outlined',
}) => {
  const { modalOpened, setModalOpened } = useModal();
  return (
    <div className="connect-modal">
      <UiButton
        className={classNames(className, 'connect-modal__button')}
        fillType={fillType}
        mode={mode}
        onClick={() => setModalOpened(true)}>
        {buttonText}
      </UiButton>
      {modalOpened && (
        <UiModal visible={modalOpened}>
          <ContactUsFormView onClose={() => setModalOpened(false)} />
        </UiModal>
      )}
    </div>
  );
};
