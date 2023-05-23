"use client";

import { FC, PropsWithChildren } from "react";
import { UiCard } from "@/ui-elements/ui-card/ui-card";
import { ContactUsFormView } from "@/views/contact-us-form-view";

interface IProps {}

export const ContactForm: FC<PropsWithChildren<IProps>> = () => {
  return (
    <div className={"contact__form"}>
      <UiCard>
        <ContactUsFormView />
      </UiCard>
    </div>
  );
};
