import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import UiSection from "@/ui-elements/ui-section/ui-section";
import UiTitle, {TitleSize} from "@/ui-elements/ui-title/ui-title";
import UiCard from "@/ui-elements/ui-card/ui-card";
import UiSectionTitle from "@/ui-elements/ui-section-title/ui-section-title";
import UiList from "@/ui-elements/ui-list/ui-list";
import UiListItem from "@/ui-elements/ui-list-item/ui-list-item";
import UiParagraph, {ParagraphSize} from "@/ui-elements/ui-paragraph/ui-paragraph";

const CARGO_OWNER_LIST = ['Автопланирование маршрутов по 15 алгоритмам, подбор наилучшего результата',
  'Корректировка маршрутов на любом этапе его исполнения',
  'Передача на исполнение рейса своим водителям (если они есть)',
  'Поиск исполнителей на тендерной площадке (если нет своих водителей)',
  'Формирование документов из готовых шаблонов',
  'Подписание документов в электронном виде',
  'Мобильное приложение для водителей',
  'План-фактный анализ',]

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <UiSection>
          <UiSectionTitle>Транспортным компаниям и грузовладельцам выгодно, когда все в “одном окне”</UiSectionTitle>
          <UiTitle size={TitleSize.extraLarge}>Грузовладельцам</UiTitle>
          <UiCard>
            <UiTitle size={TitleSize.small}>1 специалист вместо 5 человек ведет всю цепочку заявок от заведения заявки до отчета о
              доставке
              груза</UiTitle>
            <UiList>
              {CARGO_OWNER_LIST.map((item) => (<UiListItem><UiParagraph size={ParagraphSize.mediumBold}>{item}</UiParagraph></UiListItem>))}
            </UiList>
          </UiCard>
        </UiSection>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
