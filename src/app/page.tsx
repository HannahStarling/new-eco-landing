import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import UiTitle from "@/ui-elements/ui-title/ui-title";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <section>
          <UiTitle level={2}>Транспортным компаниям и грузовладельцам выгодно, когда все в “одном окне”</UiTitle>
        </section>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
