import './stage-card.scss';
import { FC } from 'react';
import { TitleSize, UiTitle } from '@/ui-elements/ui-title/ui-title';
import { UiIcon } from '@/ui-elements/ui-icon/ui-icon';
import { IconName } from '@/ui-elements/ui-icon/icon-names';
import { UiCard } from '@/ui-elements/ui-card/ui-card';
import { ListType, UiList } from '@/ui-elements/ui-list/ui-list';
import { UiListItem } from '@/ui-elements/ui-list-item/ui-list-item';

type Image = {
  width: number;
  height: number;
  name: IconName;
};

interface IProps {
  title: string;
  text: string[];
  img: Image;
}

export const StageCard: FC<IProps> = ({ title, text, img }) => {
  return (
    <UiCard className="stage-card">
      <div className="stage-card__text">
        <UiTitle size={TitleSize.medium}>{title}</UiTitle>
        <UiList type={ListType.vertical}>
          {text.map((item) => (
            <UiListItem key={item}>{item}</UiListItem>
          ))}
        </UiList>
      </div>
      <UiIcon
        name={img.name}
        size={{ width: img.width, height: img.height }}
        alt="Иконка карточки"
      />
    </UiCard>
  );
};
