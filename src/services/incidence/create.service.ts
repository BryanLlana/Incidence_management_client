import { api } from "../../lib/axios";
import { IncidenceForm } from "../../types";

export const createIncidenceService = async (formData: IncidenceForm) => {
  try {
    const { data } = await api.post('/incidence', formData)
    return data
  } catch (error) {
    console.log(error)
  }
}