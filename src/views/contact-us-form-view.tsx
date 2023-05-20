"use client";

import { FC } from "react";
import { FormComponent } from "@/components/form-component/form-component";
import { handleContactUsSubmit } from "@/helpers/contact-us-form/contact-us";
import { useForm } from "@/hooks/useForm";
import { validateData } from "@/helpers/contact-us-form/validate-data";
import { FormValuesContactUs } from "@/constants/form";

interface IProps {
  onClose?(): void;
}

export const CONTACT_US_FORM_INITIAL_VALUES: FormValuesContactUs = {
  Agreement: true,
};

export const ContactUsFormView: FC<IProps> = ({ onClose }) => {
  const { values, isValid, handleChange, handleSubmit } =
    useForm<FormValuesContactUs>({
      initialValues: CONTACT_US_FORM_INITIAL_VALUES,
      onSubmit: handleContactUsSubmit,
      validator: validateData,
    });

  return (
    <FormComponent
      isValid={isValid}
      values={values}
      onChange={handleChange}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
