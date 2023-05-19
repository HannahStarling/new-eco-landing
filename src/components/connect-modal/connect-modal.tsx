'use client';

import { useModal } from '@/hooks/useModal';
import './connect-modal.scss';
import { FC } from 'react';
import { UiButton } from '@/ui-elements/ui-button/ui-button';
import { UiModal } from '@/ui-elements/ui-modal-window/ui-modal-window';
import { FormComponent } from '../form-component/form-component';
import classNames from 'classnames';

interface IProps {
  className?: string;
  buttonText: string;
}

export const ConnectModal: FC<IProps> = ({ className, buttonText }) => {
  const { modalOpened, setModalOpened } = useModal();
  return (
    <div className="connect-modal">
      <UiButton
        className={classNames(className, 'connect-modal__button')}
        fillType="outlined"
        mode="dark"
        onClick={() => setModalOpened(true)}>
        {buttonText}
      </UiButton>
      <UiModal visible={modalOpened}>
        <FormComponent onClose={() => setModalOpened(false)} />
      </UiModal>
    </div>
  );
};
