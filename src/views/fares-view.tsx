import { FaresComponent } from "@/components/fares-component/fares-component"
import { useFares } from "@/hooks/useFares"

export const FaresView = () => {
  const fares = useFares()
  return <FaresComponent fares={fares} />
}