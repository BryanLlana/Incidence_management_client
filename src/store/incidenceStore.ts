import { create } from "zustand";
import { Incidence } from "../types";
import { getIncidentsService } from "../services/incidence/getIncidents.service";

interface IncidenceStore {
  incidents: Incidence[],
  incidentsCopy: Incidence[],
  getIncidents: () => void,
  deleteIncidence: (id: string) => void,
  updateStatus: (id: string) => void,
  filterIncidents: (date: string, status: string | boolean) => void,
  resetFilter: () => void
}

export const useIncidenceStore = create<IncidenceStore>(set => ({
  incidents: [],
  incidentsCopy: [],
  getIncidents: async () => {
    const data = await getIncidentsService()
    set(() => ({
      incidents: data,
      incidentsCopy: data
    }))
  },
  deleteIncidence: async (id: string) => {
    set(state => {
      const incidentsUpdate = state.incidents.filter(incidence => incidence.id !== id)
      return {
        incidents: incidentsUpdate
      }
    })
  },
  updateStatus: (id) => {
    set(state => {
      const incidentsUpdate = state.incidents.map(incidence => {
        if (incidence.id === id) {
          incidence.status = !incidence.status
          return incidence
        } else {
          return incidence
        }
      })
      return {
        incidents: incidentsUpdate
      }
    })
  },
  filterIncidents: (date, status) => {
    set(state => {
      const statusFilter = status === 'true' ? false : status === 'false' ? true : ''
      const incidentsFilter = state.incidents.filter(incidence => {
        const dateIncidence = incidence.createdAt.split('T')[0]
        if (date) {
          if (incidence.status !== statusFilter && dateIncidence.toString() === date.toString()) {
            return incidence
          }
        } else {
          if (incidence.status !== statusFilter) {
            return incidence
          }
        }
      })
      return {
        incidents: incidentsFilter
      }
    })
  },
  resetFilter: () => {
    set(state => {
      return {
        incidents: state.incidentsCopy
      } 
    })
  }
}))