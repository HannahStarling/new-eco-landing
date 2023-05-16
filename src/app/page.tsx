import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <section>

        </section>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
