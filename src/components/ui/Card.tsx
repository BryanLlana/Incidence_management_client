import { Container, Card } from 'react-bootstrap'
import { Link } from 'wouter'

type Props = {
  title: string,
  text: string
}

const CardPresentation = ({ title, text }: Props) => {
  return (
    <Container className="my-5 d-flex justify-content-center align-items-center">
      <Card className="bg-[#0168AD] text-white" >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='mb-4'>{text}</Card.Text>
          <Link href='/create-incidence' className='bg-[#019D9A] py-2 px-3 rounded-md'>Reportar Incidencia</Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CardPresentation