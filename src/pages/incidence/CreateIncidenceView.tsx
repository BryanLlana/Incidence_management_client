import { useForm } from "react-hook-form"
import FormIncidence from "../../components/incidence/FormIncidence"
import LayoutApp from "../../layout/LayoutApp"
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'
import { Container, Form, Button} from 'react-bootstrap'
import { IncidenceForm } from "../../types"
import { createIncidenceService } from "../../services/incidence/create.service"

const CreateIncidenceView = () => {
  const [location, navigate] = useLocation()
  const initialState: IncidenceForm = {
    title: '',
    description: '',
    type: '',
    location: '',
    userId: 0
  } 
  const { register, handleSubmit, formState: { errors }} = useForm({ defaultValues: initialState })

  const handleForm = handleSubmit(async (formData: IncidenceForm) => {
    const data = await createIncidenceService(formData)
    toast.success(data.message)
    navigate('/')
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

export default CreateIncidenceView