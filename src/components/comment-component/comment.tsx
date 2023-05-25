import { FC, PropsWithChildren } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { UiIcon } from "@/ui-elements/ui-icon/ui-icon";
import { IconName } from "@/ui-elements/ui-icon/icon-names";
import "./comment.scss";

type Color = "green" | "blue";

interface IProps {
  children?: React.ReactNode | React.ReactElement;
  color?: Color;
}

export const Comment: FC<PropsWithChildren<IProps>> = ({
  children,
  color = "green",
}) => {
  return (
    <UiCard className="comment">
      <UiIcon
        alt={"Аватар пользователя, который оставил отзыв."}
        size={{ width: 53, height: 53 }}
        name={
          color === "green"
            ? IconName.CommentAvatarGreen
            : IconName.CommentAvatarBlue
        }
      />
      {children}
    </UiCard>
  );
};
