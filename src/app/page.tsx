import { HeaderComponent } from '@/components/header-component/header-component';
import { FooterComponent } from '@/components/footer-component/footer-component';
import { MainComponent } from '@/components/main-component/main-component';
import './styles/page.scss';
import { Benefits } from '@/components/benefits-component/benefits';
import { Hero } from '@/components/hero-component/hero';
import { CommentsList } from '@/components/comments-list-component/comments-list';
import { Companies } from '@/components/companies-component/companies-component';
import { Presentation } from '@/components/presentation-component/presentation-component';
import { FullCycle } from '@/components/full-cycle-component/full-cycle-component';

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent>
        <Hero />
        <Benefits />
        <Presentation />
        <FullCycle />
        <CommentsList />
        <Companies />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
