import "./benefits.scss";
import { UiSection } from "@/ui-elements/ui-section/ui-section";
import { UiSectionTitle } from "@/ui-elements/ui-section-title/ui-section-title";
import { BenefitsArticle } from "@/components/benefits-component/benefits-article";
import { FC } from "react";
import { BENEFITS_ARTICLE, BENEFITS_ARTICLES } from "@/constants/benefits";
import { SECTION_TITLES } from "@/constants/texts";

export const Benefits: FC = () => {
  return (
    <UiSection className={"benefits"}>
      <UiSectionTitle>{SECTION_TITLES.Benefits}</UiSectionTitle>
      {BENEFITS_ARTICLES.map((article) => {
        const { text, title, accent, list, chips } = BENEFITS_ARTICLE[article];
        return (
          <BenefitsArticle
            key={article}
            title={title}
            text={text}
            accent={accent}
            chips={chips}
            list={list}
          />
        );
      })}
    </UiSection>
  );
};
