import { UiButton } from "@/ui-elements/ui-button/ui-button";

export const HeaderButtonComponent = () => {
  return (
    <div className="header__button button">
      <UiButton fillType="outlined" className="button__login">
        Войти
      </UiButton>
    </div>
  );
};
