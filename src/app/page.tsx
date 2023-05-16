import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import UiTitle from "@/ui-elements/ui-title/ui-title";
import UiSection from "@/ui-elements/ui-section/ui-section";
import UiCard from "@/ui-elements/ui-card/ui-card";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <UiSection>
          <UiTitle level={3}>Транспортным компаниям и грузовладельцам выгодно, когда все в “одном окне”</UiTitle>
          <UiTitle level={4}>Грузовладельцам</UiTitle>
          <UiCard>
            <UiTitle level={7}>1 специалист вместо 5 человек ведет всю цепочку заявок от заведения заявки до отчета о доставке
              груза</UiTitle>
          </UiCard>
        </UiSection>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
