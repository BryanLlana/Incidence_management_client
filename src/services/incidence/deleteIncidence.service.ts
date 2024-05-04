import { api } from "../../lib/axios"

export const deleteIncidenceService = async (id: string) => {
  try {
    const { data } = await api.delete(`/incidence/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}