import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { SchemeRowComponent } from "./scheme-row-component";
import { SchemeBlock } from "@/constants/scheme";
import { SchemeHeaderComponent } from "./scheme-header-component";

export const SchemeComponent = () => {
  return (
    <UiSection className="scheme">
      <SchemeHeaderComponent />
      {Object.entries(SchemeBlock).map(([key, scheme]) => {
        return <SchemeRowComponent key={key} scheme={scheme} />;
      })}
    </UiSection>
  );
};
