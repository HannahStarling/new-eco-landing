import {Tariff} from "@/models/fare";

export const getTariffs = async (): Promise<Array<Tariff>> => {
  return [{price: 499}]
}