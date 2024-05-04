import { Container, Card } from 'react-bootstrap'
import LayoutApp from '../layout/LayoutApp'
import { Link } from 'wouter';
import TableIncidents from '../components/incidence/TableIncidents';

const IncidentsView = () => {
  return (
    <LayoutApp>
      <Container className="my-5 d-flex justify-content-center align-items-center">
        <Card className="bg-[#0168AD] text-white" >
          <Card.Body>
            <Card.Title>Bienvenido a la Plataforma de Gestión de Incidencias</Card.Title>
            <Card.Text className='mb-4'>
              Aquí puedes reportar y gestionar incidencias relacionadas con el edificio.
            </Card.Text>
            <Link href='/create-incidence' className='bg-[#019D9A] py-2 px-3 rounded-md'>Reportar Incidencia</Link>
          </Card.Body>
        </Card>
      </Container>

      <TableIncidents />
    </LayoutApp>
  )
}

export default IncidentsView