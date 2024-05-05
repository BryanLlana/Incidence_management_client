import { useForm } from "react-hook-form"
import FormIncidence from "../../components/incidence/FormIncidence"
import LayoutApp from "../../layout/LayoutApp"
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'
import { Container, Form, Button} from 'react-bootstrap'
import { IncidenceForm } from "../../types"
import { createIncidenceService } from "../../services/incidence/createIncidence.service"
import { uploadIncidenceService } from "../../services/incidence/uploadIncidence.service"

const CreateIncidenceView = () => {
  const [, navigate] = useLocation()
  const initialState: IncidenceForm = {
    title: '',
    description: '',
    type: '',
    location: '',
    userId: '',
    image: ''
  } 
  const { register, handleSubmit, formState: { errors }, watch} = useForm({ defaultValues: initialState })

  const handleForm = handleSubmit(async (formData: IncidenceForm) => {
    const formImage = new FormData()
    formImage.append('image', formData.image[0])
    const { fileName } = await uploadIncidenceService(formImage)
    formData.image = fileName
    const data = await createIncidenceService(formData)
    toast.success(data.message)
    navigate('/')
  })

  return (
    <LayoutApp>
      <Container className="my-5 md:w-[50%]">
        <h2 className="text-center mb-4 text-3xl font-bold">Reportar Incidencia</h2>
        <Form onSubmit={handleForm} noValidate>
          <FormIncidence register={register} errors={errors} watch={watch}/>
          <Button type="submit" className="w-100 bg-[#019D9A] font-bold">Enviar Reporte</Button>
        </Form>
      </Container>
    </LayoutApp>
  )
}

export default CreateIncidenceView