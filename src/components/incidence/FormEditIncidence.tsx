import { useForm } from "react-hook-form"
import { Incidence, IncidenceForm } from "../../types"
import LayoutApp from "../../layout/LayoutApp"
import { Button, Container, Form } from "react-bootstrap"
import FormIncidence from "./FormIncidence"
import { updateIncidenceService } from "../../services/incidence/updateIncidence.service"
import { toast } from "react-toastify"
import { useLocation } from "wouter"

type Props = {
  incidence: Incidence
}

const FormEditIncidence = ({ incidence }: Props) => {
  const [location, navigate] = useLocation()
  const initialState: IncidenceForm = {
    title: incidence.title,
    description: incidence.description,
    type: incidence.type,
    location: incidence.location,
    userId: incidence.user.id
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialState })

  const handleForm = handleSubmit(async (formData: IncidenceForm) => {
    const data = await updateIncidenceService(incidence.id, formData)
    toast.success(data.message)
    navigate('/admin/incidents')
  })

  return (
    <LayoutApp>
      <Container className="my-5 md:w-[50%]">
        <h2 className="text-center mb-4 text-3xl font-bold">Reportar Incidencia</h2>
        <Form onSubmit={handleForm} noValidate>
          <FormIncidence register={register} errors={errors} />
          <Button type="submit" className="w-100 bg-[#019D9A] font-bold">Enviar Reporte</Button>
        </Form>
      </Container>
    </LayoutApp>
  )
}

export default FormEditIncidence