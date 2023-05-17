import "./styles/page.scss";
import { HeaderComponent } from "@/components/header-component/header-component";
import { FooterComponent } from "@/components/footer-component/footer-component";
import { MainComponent } from "@/components/main-component/main-component";
import { Cover } from "@/components/cover-component/cover";
import { Benefits } from "@/components/benefits-component/benefits";
import { CommentsList } from "@/components/comments-list-component/comments-list";
import { Companies } from "@/components/companies-component/companies";
import { PlatformModules } from "@/components/platform-modules-component/platform-modules";
import { FullCycle } from "@/components/full-cycle-component/full-cycle-component";
import { ThePlatformAdjusts } from "@/components/the-platform-adjusts-component/the-platform-adjusts";
import { Tender } from "@/components/tender-component/tender";
import { Edo } from "@/components/EDO-component/EDO";
import { MobileApp } from "@/components/mobile-app-component/mobile-app";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent>
        <Cover />
        <Benefits />
        <PlatformModules />
        <FullCycle />
        <ThePlatformAdjusts />
        <Tender />
        <Edo />
        <MobileApp />
        <CommentsList />
        <Companies />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
