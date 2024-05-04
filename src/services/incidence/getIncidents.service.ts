import { api } from "../../lib/axios"

export const getIncidentsService = async () => {
  try {
    const { data } = await api.get('/incidence')
    return data
  } catch (error) {
    console.log(error)
  }
}