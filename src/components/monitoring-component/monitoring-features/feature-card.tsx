import "./feature-card.scss";
import { FC } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { ImageType } from "@/types/image";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { ListType, UiList } from "@/ui-elements/ui-list/ui-list";
import { UiListItem } from "@/ui-elements/ui-list-item/ui-list-item";

interface IProps {
  title: string;
  list: string[];
  img: ImageType;
}

export const FeatureCard: FC<IProps> = ({ title, list, img }) => {
  return (
    <UiCard className="feature-card">
      <UiIcon alt="GPS иконка" name={img.name} size={{ width: img.width, height: img.height }} />
      <UiTitle size={TitleSize.medium}>{title}</UiTitle>
      {list && (
        <UiList type={ListType.vertical} disc>
          {list.map((item) => (
            <UiListItem disc key={item}>
              {item}
            </UiListItem>
          ))}
        </UiList>
      )}
    </UiCard>
  );
};
