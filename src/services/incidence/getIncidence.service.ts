import { api } from "../../lib/axios"

export const getIncidenceService = async (id: string) => {
    const { data } = await api.get(`/incidence/${id}`)
    return data
}