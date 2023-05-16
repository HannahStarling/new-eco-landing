import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import UiSection from "@/ui-elements/ui-section/ui-section";
import UiTitle, {TitleSize} from "@/ui-elements/ui-title/ui-title";
import UiCard from "@/ui-elements/ui-card/ui-card";
import UiSectionTitle from "@/ui-elements/ui-section-title/ui-section-title";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <UiSection>
          <UiSectionTitle>Транспортным компаниям и грузовладельцам выгодно, когда все в “одном окне”</UiSectionTitle>
          <UiTitle size={TitleSize.extraLarge}>Грузовладельцам</UiTitle>
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
