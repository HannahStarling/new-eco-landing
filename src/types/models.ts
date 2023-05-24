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

<<<<<<< HEAD
export type FormValues<K> = {
  [P in keyof K]:
    | InputHTMLAttributes<HTMLInputElement>["value"]
    | HTMLInputElement["checked"]
    | string;
};
export type FormErrors<K> = { [P in keyof K]: string | boolean };
export type FormValidationMessages<K> = { [P in keyof K | string]: string };
=======
export type FormValues<K extends string | number | symbol> = Record<
  K,
  HTMLInputElement['value'] | HTMLInputElement['checked']
>;
export type FormErrors<K extends string | number | symbol> = Record<K, string>;
export type FormValidationMessages<K extends string | number | symbol> = Record<K, string>;
>>>>>>> 0c9b9da66bd7626183050583773d920a12eb9d0a

export interface IUseFormArgument<K extends string | number | symbol> {
  initialValues: FormValues<K>;
  initialErrors: FormErrors<K>;
  validationMessages: FormValidationMessages<K>;
  onSubmit: IFormFunction<K>["onSubmit"];
  validator: IFormFunction<K>["validator"];
  handleApiError?: (error: string) => void;
}
