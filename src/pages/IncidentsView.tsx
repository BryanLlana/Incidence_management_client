import LayoutApp from '../layout/LayoutApp'
import TableIncidents from '../components/incidence/TableIncidents';
import CardPresentation from '../components/ui/Card';

const IncidentsView = () => {
  return (
    <LayoutApp>
      <CardPresentation
        title='Bienvenido a la Plataforma de Gestión de Incidencias' 
        text='Aquí puedes reportar y gestionar incidencias relacionadas con el edificio.'
      />
      <TableIncidents />
    </LayoutApp>
  )
}

export default IncidentsView