import LayoutApp from '../layout/LayoutApp'
import TableIncidents from '../components/incidence/TableIncidents';
import CardPresentation from '../components/ui/Card';
import Filter from '../components/ui/Filter';

const IncidentsView = () => {
  
  return (
    <LayoutApp>
      <CardPresentation
        title='Bienvenido a la Plataforma de Gestión de Incidencias'
        text='Aquí puedes reportar y gestionar incidencias relacionadas con el edificio.'
      />

      <Filter /> 

      <TableIncidents />
    </LayoutApp>
  )
}

export default IncidentsView