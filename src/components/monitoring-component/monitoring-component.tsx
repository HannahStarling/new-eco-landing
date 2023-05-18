import { UiSectionTitle } from '@/ui-elements/ui-section-title/ui-section-title';
import './monitoring-component.scss';
import { UiSection } from '@/ui-elements/ui-section/ui-section';
import { FC } from 'react';
import { UiAccent } from '@/ui-elements/ui-accent/ui-accent';
import Image from 'next/image';
import { MonitoringFeatures } from './monitoring-features/monitoring-features';
import { MonitoringStatistics } from './monitoring-statistics/monitoring-statistics';

interface IProps {}

export const Monitoring: FC<IProps> = ({ ...props }) => {
  return (
    <UiSection className="monitoring">
      <UiSectionTitle>
        <UiAccent>Получаете план-фактный анализ на основе интеграции </UiAccent>с вашим сервисом
        мониторинга или внутри нашей платформы
      </UiSectionTitle>
      <Image width={1127} height={498} src="/assets/images/Monitoring.png" alt="Мониторинг" />
      <div className="monitoring__info">
        <MonitoringFeatures />
        <Image
          className="monitoring__info-map"
          width={360}
          height={529}
          src="/assets/images/Map.png"
          alt="Карта"
        />
        <MonitoringStatistics />
      </div>
    </UiSection>
  );
};
