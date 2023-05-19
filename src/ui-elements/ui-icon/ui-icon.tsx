'use client';

import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { IconName } from './icon-names';

export interface IProps {
  className?: string;
  name: IconName;
  alt: string;
  size?: {
    width: number;
    height: number;
  };
  onClick?: () => void;
}

const ROOT_PATH = '/assets/icons/';

export const UiIcon: FC<IProps> = ({
  alt,
  className,
  name,
  size: { width, height } = {
    width: 20,
    height: 20,
  },
  onClick,
}) => {
  return (
    <Image
      width={width}
      height={height}
      priority
      className={classNames(className, 'ui-icon')}
      src={`${ROOT_PATH}${name}.svg`}
      alt={alt}
      onClick={onClick}
    />
  );
};
