import { PARTNERS } from "@/constants/texts";
import { DetailButtonComponent } from "../buttons/detail-button/detail-button-component";
import { TitleSize, UiTitle } from "@/ui-elements/ui-title/ui-title";
import { UiAccent } from "@/ui-elements/ui-accent/ui-accent";
import { Color } from "@/types/color";
import "./partners-detail-component.scss";

export const PartnersDetailComponent = () => {
  return (
    <div className="partners__scroll partner">
      <div className="partner__detail">
        {PARTNERS.map((partner, index) => {
          return (
            <div key={partner.name + index} className="partner__single">
              <UiTitle className="partner__title" size={TitleSize.extraLarge}>
                <UiAccent color={Color.white}>{partner.name}</UiAccent>
              </UiTitle>
              <DetailButtonComponent url={partner.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
