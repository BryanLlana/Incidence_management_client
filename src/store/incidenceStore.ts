import { create } from "zustand";
import { Incidence } from "../types";
import { getIncidentsService } from "../services/incidence/getIncidents.service";

interface IncidenceStore {
  incidents: Incidence[],
  getIncidents: () => void
}

export const useIncidenceStore = create<IncidenceStore>(set => ({
  incidents: [],
  getIncidents: async () => {
    const data = await getIncidentsService()
    set(() => ({
      incidents: data
    }))
  }
}))