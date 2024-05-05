import { api } from "../../lib/axios"

export const uploadIncidenceService = async (formImage: FormData) => {
  try {
    const { data } = await api.post('/upload/single/incidence', formImage)
    return data
  } catch (error) {
    console.log(error)
  }
}