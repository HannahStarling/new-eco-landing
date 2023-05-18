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
