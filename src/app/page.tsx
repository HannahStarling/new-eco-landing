import {HeaderComponent} from "@/components/header-component/header-component";
import {FooterComponent} from "@/components/footer-component/footer-component";
import {MainComponent} from "@/components/main-component/main-component";
import "./styles/page.scss";
import Title from "@/ui-elements/title/title";
import Paragraph, {ParagraphSize} from "@/ui-elements/paragraph/paragraph";
import Modal from "@/ui-elements/modal-window/modal-window";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent/>
      <MainComponent>
        <section>
          <Modal>
            <Title>ILS Online</Title>
            <Paragraph size={ParagraphSize.small}>LOL</Paragraph>
          </Modal>
        </section>
      </MainComponent>
      <FooterComponent/>
    </div>
  );
}
