import './service-card.scss';
import { FC } from 'react';
import Image from 'next/image';
import { UiCard } from '@/ui-elements/ui-card/ui-card';

interface IProps {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export const ServiceCard: FC<IProps> = ({ width, height, src, alt }) => {
  return (
    <UiCard className="service-card">
      <Image src={src} width={width} height={height} alt={alt} />
    </UiCard>
  );
};
