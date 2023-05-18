import { FC } from 'react';
import { UiParagraph } from '@/ui-elements/ui-paragraph/ui-paragraph';
import { UiSectionTitle } from '@/ui-elements/ui-section-title/ui-section-title';
import { UiAccent } from '@/ui-elements/ui-accent/ui-accent';

interface IProps {
  accent: string;
  text: string;
}

export const StageInfo: FC<IProps> = ({ text, accent }) => {
  return (
    <div className="stage-info">
      <UiSectionTitle>
        Этап <UiAccent>{accent}</UiAccent>
      </UiSectionTitle>
      <UiParagraph>{text}</UiParagraph>
    </div>
  );
};
