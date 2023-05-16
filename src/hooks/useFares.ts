'use client';

import {Tariff} from "@/models/fare"
import {useEffect, useState} from "react"
import {getTariffs} from "@/api/get-tariffs";

export const useTariffs = () => {
  const [tariffs, setTariffs] = useState<Array<Tariff>>([])
  useEffect(() => {
    async function tokenCheck() {
      try {
        const tariffs = await getTariffs()
        setTariffs(tariffs)
      } catch (_) {
      } finally {
      }
    }

    setTariffs(tariffs)
    tokenCheck();
  }, []);


  return tariffs
}