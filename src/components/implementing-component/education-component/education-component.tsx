import './education-component.scss';
import { UiSectionTitle } from '@/ui-elements/ui-section-title/ui-section-title';
import { UiAccent } from '@/ui-elements/ui-accent/ui-accent';
import { FC } from 'react';
import { Color } from '@/types/color';
import { ParagraphSize, UiParagraph } from '@/ui-elements/ui-paragraph/ui-paragraph';
import { ContentCard } from './content-card';
import { LinkInfo } from './link-info';
import Image from 'next/image';

interface IProps {}

const CONTENT_CARD_INFO = [
  {
    title: 'Видео-курс с теорией',
    text: 'Для этого мы разработали видео-курс с теорией, практикой и системой проверки знаний',
  },
  {
    title: 'Сертификат',
    text: 'После успешного прохождения курса выдаем сертификат каждому сотруднику',
  },
];

const ACCESS_LINKS_INFO = [
  'Планировщик ИЛС с нуля до PRO',
  'Внутреннее обучениепо всем продуктам ИЛС',
  'Мониторинг ИЛС с нуля до PRO',
  'Тендерная площадка ИЛС (грузовладелец) с нуля до PRO',
  'Тендерная площадка ИЛС (перевозчик) с нуля до PRO',
];

export const Education: FC<IProps> = ({ ...props }) => {
  return (
    <div className="education">
      <UiSectionTitle>
        Обучим работать с платформой
        <UiAccent color={Color.greenMain}> за один день</UiAccent>
      </UiSectionTitle>
      <div className="education__info">
        <div className="education__info-left">
          {CONTENT_CARD_INFO.map((item) => (
            <ContentCard key={item.title} text={item.text} title={item.title} />
          ))}
          <div className="education__info-left__addition">
            <UiParagraph size={ParagraphSize.large}>
              *Бесплатное техническое обслуживание при успешном прохождении обучения
            </UiParagraph>
          </div>
        </div>
        <div className="education__info-right">
          <div className="education__info-right__links">
            {ACCESS_LINKS_INFO.map((item) => (
              <LinkInfo key={item} text={item} />
            ))}
          </div>
          <Image src="/assets/images/Sertificate.png" alt="Сертификат" width="645" height="516" />
        </div>
      </div>
    </div>
  );
};
