'use client';

import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IconName } from './icon-names';

export type Props = {
  className?: string;
  name: IconName;
  size?: number;
};

const ROOT_PATH = '/assets/icons/';

export const UiIcon: FC<Props> = ({ className, name, size = 20 }) => {
  return (
    <Image
      width={size}
      height={size}
      priority
      className={classNames(className, 'ui-icon')}
      src={`${ROOT_PATH}${name}.svg`}
      alt="Follow us on Twitter"
    />
  );
};
