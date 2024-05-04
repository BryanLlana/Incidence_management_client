import { api } from "../../lib/axios";
import { IncidenceForm } from "../../types";

export const updateIncidenceService = async (id: string, formData: IncidenceForm) => {
  try {
    const { data } = await api.put(`/incidence/${id}`, formData)
    return data
  } catch (error) {
    console.log(error)
  }
}