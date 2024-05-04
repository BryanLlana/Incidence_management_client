import { create } from "zustand";
import { Incidence } from "../types";
import { getIncidentsService } from "../services/incidence/getIncidents.service";

interface IncidenceStore {
  incidents: Incidence[],
  getIncidents: () => void,
  deleteIncidence: (id: string) => void
}

export const useIncidenceStore = create<IncidenceStore>(set => ({
  incidents: [],
  getIncidents: async () => {
    const data = await getIncidentsService()
    set(() => ({
      incidents: data
    }))
  },
  deleteIncidence: async (id: string) => {
    set(state => {
      const incidentsUpdate = state.incidents.filter(incidence => incidence.id !== id)
      return {
        incidents: incidentsUpdate
      }
    })
  }
}))