import { HeaderComponent } from '@/components/header-component/header-component';
import { FooterComponent } from '@/components/footer-component/footer-component';
import { MainComponent } from '@/components/main-component/main-component';
import './styles/page.scss';
import { Benefits } from '@/components/benefits-component/benefits';
import { HeroComponent } from '@/components/hero-component/hero-component';
import { CommentsList } from '@/components/comments-list-component/comments-list';
import { Companies } from '@/components/companies-component/companies-component';

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent>
        <HeroComponent />
        <Benefits />
        <CommentsList />
        <Companies />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
