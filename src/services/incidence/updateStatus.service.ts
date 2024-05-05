import { api } from "../../lib/axios"

export const updateStatusService = async (id: string) => {
  try {
    const { data } = await api.patch(`/incidence/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}