'use client';

import { ParagraphSize, UiParagraph } from '@/ui-elements/ui-paragraph/ui-paragraph';
import React, { FC } from 'react';
import './notification-error.scss';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { IconName } from '@/ui-elements/ui-icon/icon-names';

type Props = {
  error: any;
  clearError: any;
};

export const ErrorNotification: FC<Props> = ({ error, clearError }) => {
  return (
    <div className="error-notification">
      <UiParagraph size={ParagraphSize.medium}>{error}</UiParagraph>
      <UiIcon
        alt="Закрыть уведомление"
        size={{ width: 15, height: 15 }}
        name={IconName.CloseWhite}
        onClick={clearError}
      />
    </div>
  );
};
