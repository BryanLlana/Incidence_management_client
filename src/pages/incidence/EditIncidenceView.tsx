import { useEffect, useState } from "react"
import { getIncidenceService } from "../../services/incidence/getIncidence.service"
import { useLocation, useParams } from "wouter"
import FormEditIncidence from "../../components/incidence/FormEditIncidence"

const EditIncidenceView = () => {
  const [, navigate] = useLocation()
  const { id } = useParams()
  const [incidence, setIncidence] = useState(null)

  useEffect(() => {
    const getIncidence = async () => {
      let incidenceApi
      try {
        incidenceApi = await getIncidenceService(id!)
      } catch (error) {
        console.log(error)
        navigate('/admin/incidents')        
      }
      setIncidence(incidenceApi)
    }

    getIncidence()
  }, [])

  if (incidence) return <FormEditIncidence incidence={incidence} />
}

export default EditIncidenceView