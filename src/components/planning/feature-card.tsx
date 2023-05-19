import { FC } from 'react';
import { UiAccent } from '@/ui-elements/ui-accent/ui-accent';
import { TitleSize, UiTitle } from '@/ui-elements/ui-title/ui-title';
import { ImageType } from '@/types/image';
import { UiCard } from '@/ui-elements/ui-card/ui-card';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { UiParagraph } from '@/ui-elements/ui-paragraph/ui-paragraph';
import './feature-card.scss';
import { UiSectionTitle } from '@/ui-elements/ui-section-title/ui-section-title';

interface IProps {
  title: string;
  img?: ImageType;
  text: string;
  accent?: string;
}

export const FeatureCard: FC<IProps> = ({ title, img, text, accent }) => {
  return (
    <UiCard className="planning-feature-card">
      <div className="planning-feature-card__header">
        <UiTitle size={TitleSize.medium}>{title}</UiTitle>
        {img && (
          <UiIcon
            name={img.name}
            alt={img.alt || 'Функция'}
            size={{ width: img.width, height: img.height }}
          />
        )}
      </div>
      <UiSectionTitle>
        <UiAccent>{accent}</UiAccent>
      </UiSectionTitle>
      <UiParagraph>{text}</UiParagraph>
    </UiCard>
  );
};
