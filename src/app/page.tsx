import "./styles/page.scss";
import { HeaderComponent } from "@/components/header-component/header-component";
import { FooterComponent } from "@/components/footer-component/footer-component";
import { MainComponent } from "@/components/main-component/main-component";
import { CommentsList } from "@/components/comments-list-component/comments-list";
import { Companies } from "@/components/companies-component/companies";
import { PlatformModules } from "@/components/platform-modules-component/platform-modules";
import { FullCycle } from "@/components/full-cycle-component/full-cycle-component";
import { ThePlatformAdjusts } from "@/components/the-platform-adjusts-component/the-platform-adjusts";
import { Tender } from "@/components/tender-component/tender";
import { Edo } from "@/components/EDO-component/EDO";
import { MobileApp } from "@/components/mobile-app-component/mobile-app";
import { Implementing } from "@/components/implementing-component/implementing";
import { Tariffs } from "@/components/tariffs-component/tariffs";
import { SchemeComponent } from "@/components/scheme-component/scheme-component";
import { Monitoring } from "@/components/monitoring-component/monitoring-component";
import { Planning } from "@/components/planning/planning";
import { IntegrationAnalysis } from "@/components/integration-analysis-component/integration-analysis";
import { OneSpecialist } from "@/components/one-specialist-component/one-specialist";
import { Contact } from "@/components/contact-component/contact";
import { Comparison } from "@/components/comparison-component/comparison";

export default function Home() {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <MainComponent>
        <OneSpecialist />
        <PlatformModules />
        <FullCycle />
        <ThePlatformAdjusts />
        <SchemeComponent />
        <Planning />
        <Tender />
        <Monitoring />
        <Edo />
        <IntegrationAnalysis />
        <MobileApp />
        <Comparison />
        <Implementing />
        <Tariffs />
        <CommentsList />
        <Companies />
        <Contact />
      </MainComponent>
      <FooterComponent />
    </div>
  );
}
