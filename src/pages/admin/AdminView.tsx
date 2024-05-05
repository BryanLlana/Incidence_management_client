import TableIncidents from "../../components/incidence/TableIncidents"
import CardPresentation from "../../components/ui/Card"
import Filter from "../../components/ui/Filter"
import LayoutApp from "../../layout/LayoutApp"

const AdminView = () => {
  return (
    <LayoutApp>
      <CardPresentation 
        title="Bienvenido administrador"
        text="Aquí puedes crear, editar, actualizar estado y eliminar incidencias relacionadas con el edificio"
      />

      <Filter />
      
      <TableIncidents />
    </LayoutApp>
  )
}

export default AdminView