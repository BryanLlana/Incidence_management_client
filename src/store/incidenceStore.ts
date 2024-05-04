import { create } from "zustand";
import { Incidence } from "../types";
import { getIncidentsService } from "../services/incidence/get.service";

interface IncedenceStore {
  incidents: Incidence[],
  getIncidents: () => void
}

export const useIncedenceStore = create<IncedenceStore>(set => ({
  incidents: [],
  getIncidents: async () => {
    const data = await getIncidentsService()
    set(() => ({
      incidents: data
    }))
  }
}))