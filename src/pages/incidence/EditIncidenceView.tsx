import { useEffect, useState } from "react"
import { getIncidenceService } from "../../services/incidence/getIncidence.service"
import { useParams } from "wouter"
import FormEditIncidence from "../../components/incidence/FormEditIncidence"

const EditIncidenceView = () => {
  const { id } = useParams()
  const [incidence, setIncidence] = useState(null)

  useEffect(() => {
    const getIncidence = async () => {
      const incidenceApi = await getIncidenceService(id!)
      setIncidence(incidenceApi)
    }

    getIncidence()
  }, [])

  if (incidence) return <FormEditIncidence incidence={incidence} />
}

export default EditIncidenceView