"use client";

import { FC } from "react";
import { FormComponent } from "@/components/form-component/form-component";
import { handleContactUsSubmit } from "@/helpers/contact-us-form/contact-us";
import { useForm } from "@/hooks/useForm";
import { validateData } from "@/helpers/contact-us-form/validate-data";
import {
  CONTACT_US_FORM_INITIAL_VALUES,
  FormValuesContactUs,
} from "@/constants/form";

interface IProps {
  onClose?(): void;
}

export const ContactUsFormView: FC<IProps> = ({ onClose }) => {
  const { values, isValid, handleChange, handleSubmit, errors } =
    useForm<FormValuesContactUs>({
      initialValues: CONTACT_US_FORM_INITIAL_VALUES,
      onSubmit: handleContactUsSubmit,
      validator: validateData,
    });

  return (
    <FormComponent
      errors={errors}
      isValid={isValid}
      values={values}
      onChange={handleChange}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
