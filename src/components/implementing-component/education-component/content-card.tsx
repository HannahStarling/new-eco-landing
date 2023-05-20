import "./content-card.scss";
import { FC } from "react";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import {
  ParagraphSize,
  UiParagraph,
} from "@/ui-elements/ui-paragraph/ui-paragraph";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";

interface IProps {
  title: string;
  text: string;
}

export const ContentCard: FC<IProps> = ({ title, text }) => {
  return (
    <UiCard className="content-card">
      <UiTitle size={TitleSize.medium}>
        <UiAccent>{title}</UiAccent>
      </UiTitle>
      <UiParagraph size={ParagraphSize.large}>{text}</UiParagraph>
    </UiCard>
  );
};
