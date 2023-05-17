import { HeaderComponent } from '@/components/header-component/header-component';
import { FooterComponent } from '@/components/footer-component/footer-component';
import { MainComponent } from '@/components/main-component/main-component';
import './styles/page.scss';
import { Benefits } from '@/components/benefits-component/benefits';
import { UiSection } from '@/ui-elements/ui-section/ui-section';
import { CommentsList } from '@/components/comments-list-component/comments-list';

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent>
        <UiSection style={{ paddingTop: 60, height: 554 }}>
          Платформа Intelogis для вашего бизнеса
        </UiSection>
        <Benefits />
        <CommentsList />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
