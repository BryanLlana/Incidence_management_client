import { api } from "../../lib/axios"

export const getUsersService = async () => {
  try {
    const { data } = await api.get('/user')
    return data
  } catch (error) {
    console.log(error)
  }
}