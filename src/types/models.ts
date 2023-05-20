import { IFormFunction } from "@/types/functions";

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

export type FormValues<K> = Record<K, string | boolean | number | undefined>;

export interface IUseFormArgument<V> {
  initialValues: V;
  onSubmit: IFormFunction<V>["onSubmit"];
  validator: IFormFunction<V>["validator"];
}
