import { api } from "../../lib/axios"

export const getIncidenceService = async (id: string) => {
  try {
    const { data } = await api.get(`/incidence/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}