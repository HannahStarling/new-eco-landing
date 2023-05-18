import './gps-card.scss';
import { FC } from 'react';
import Image from 'next/image';
import { UiCard } from '@/ui-elements/ui-card/ui-card';

interface IProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export const GpsCard: FC<IProps> = ({ width, height, src, alt }) => {
  return (
    <UiCard className="gps-card">
      <Image src={src} width={width} height={height} alt={alt} />
    </UiCard>
  );
};
