import { FC } from "react";
import { UiParagraph } from "@/ui-elements/ui-paragraph/ui-paragraph";
import { TenderView } from "@/components/tender-component/tender-view";

export const TenderContent: FC = () => {
  return (
    <div className={"tender__content"}>
      <UiParagraph>
        Среди ваших постоянных подрядчиков или других транспортных компаний на
        нашей платформе
      </UiParagraph>
      <TenderView />
    </div>
  );
};
