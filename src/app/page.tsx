import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import UiTitle from "@/ui-elements/title/ui-title";
import UiParagraph, {ParagraphSize} from "@/ui-elements/paragraph/ui-paragraph";
import Modal from "@/ui-elements/modal-window/ui-modal-window";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <section>
          <Modal>
            <UiTitle>ILS Online</UiTitle>
            <UiParagraph size={ParagraphSize.small}>LOL</UiParagraph>
          </Modal>
        </section>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
