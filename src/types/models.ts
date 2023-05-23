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

export type FormValues<K extends string | symbol | number> = Record<
  K,
  InputHTMLAttributes<HTMLInputElement>["value"] | HTMLInputElement["checked"]
>;
export type FormErrors<K extends string | symbol | number> = Record<K, string>;
export type FormValidationMessages<K extends string | symbol | number> = Record<
  K,
  string
>;

export interface IUseFormArgument<K extends string | symbol | number> {
  initialValues: FormValues<K>;
  initialErrors: FormErrors<K>;
  validationMessages: FormValidationMessages<K>;
  onSubmit: IFormFunction<K>["onSubmit"];
  validator: IFormFunction<K>["validator"];
  handleApiError: (error: string) => void;
}
