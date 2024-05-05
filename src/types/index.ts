export type User = {
  id: number,
  name: string,
  lastname: string,
  role: string
}

export type IncidenceForm = {
  title: string,
  description: string,
  location: string,
  type: string,
  userId: number,
  image: string
}

export type Incidence = IncidenceForm & { 
  id: string, 
  status: boolean,
  createdAt: string, 
  user: User 
}