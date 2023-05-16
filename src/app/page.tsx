import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import Title from "@/ui-elements/title/title";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <section>
          <Title>ILS Online</Title>
        </section>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
