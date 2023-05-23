import { CONTACT_US_VALIDATION_MESSAGES } from "@/constants/validation";
import { IFormFunction } from "@/types/functions";
import { InputHTMLAttributes } from "react";

export enum Role {
  Carrier = "Carrier",
  CargoOwner = "CargoOwner",
}

export interface IBenefitsArticle {
  title: string;
  accent: string;
  text: string;
  list: Array<string>;
  chips?: {
    title: string;
    list: Array<string>;
  };
}

export type FormValues<K> = {
  [P in keyof K]:
    | InputHTMLAttributes<HTMLInputElement>["value"]
    | HTMLInputElement["checked"]
    | string;
};
export type FormErrors<K> = { [P in keyof K]: string | boolean };
export type FormValidationMessages<K> = { [P in keyof K | string]: string };

export interface IUseFormArgument<K> {
  initialValues: FormValues<K>;
  initialErrors: FormErrors<K>;
  validationMessages: FormValidationMessages<K>;
  onSubmit: IFormFunction<K>["onSubmit"];
  validator: IFormFunction<K>["validator"];
  handleApiError?: (error: string) => void;
}
