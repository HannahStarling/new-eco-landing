import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import "./presentation-component.scss";
import { Color } from "@/types/color";
import Image from "next/image";
import { UiList } from "@/ui-elements/ui-list/ui-list";

export const Presentation = () => (
  <UiSection className="companies">
    <UiSectionTitle>
      <UiAccent color={Color.greenMain}>Intelogis</UiAccent> - единая платформа
      управления транспортной логистикой
    </UiSectionTitle>
    <div style={{ display: "flex" }}>
      <Image
        src={"/assets/icons/List-dots.svg"}
        width={29}
        height={540}
        alt={"Пункты списка"}
      />
      <UiList>Все сервисы для работы на одном экране</UiList>
    </div>
  </UiSection>
);
