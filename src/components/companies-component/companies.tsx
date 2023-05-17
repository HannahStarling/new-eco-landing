import "./companies.scss";
import { companiesImages } from "./companies-images";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { Color } from "@/types/color";
import Image from "next/image";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { FC } from "react";

export const Companies: FC = () => (
  <UiSection className="companies">
    <UiSectionTitle>
      <UiAccent color={Color.greenMain}>Более 500 компаний</UiAccent> используют
      наши цифровые сервисы
    </UiSectionTitle>
    <div className="companies__list">
      {companiesImages.map((img, id) => (
        <UiCard key={id}>
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
          />
        </UiCard>
      ))}
    </div>
  </UiSection>
);