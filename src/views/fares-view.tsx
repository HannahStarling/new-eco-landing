import {useTariffs} from "@/hooks/useFares"

export const TariffsView = () => {
  const fares = useTariffs()
  return <p>{fares}</p>
}