'use client';

import { Fare } from "@/models/fare"
import { useEffect, useState } from "react"

export const useFares = () => {
  const [ fares, setFares ] = useState<Array<Fare>>([])

  // useEffect(() => {
  //   fares await = getFares() // from api folder
  //   setFares(fares)
  // }, [])

  return fares
}