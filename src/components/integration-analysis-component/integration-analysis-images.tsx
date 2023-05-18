import { FC } from "react";
import { UiImage } from "@/ui-elements/ui-image/ui-image";
import { ImageName } from "@/ui-elements/ui-image/image-names";

export const IntegrationAnalysisImages: FC = () => {
  return (
    <div className={"integration-analysis__images"}>
      <UiImage
        className={
          "integration-analysis__image integration-analysis__image_board-start"
        }
        name={ImageName.BoardStart}
        alt={"Экран аналитики со стартовым набором отчётов."}
      />
      <UiImage
        className={
          "integration-analysis__image integration-analysis__image_board-new"
        }
        name={ImageName.BoardNew}
        alt={"Экран аналитики с новым набором отчётов."}
      />
    </div>
  );
};
