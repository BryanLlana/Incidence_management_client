import { useEffect, useState } from 'react';
import { Container, Table, Badge, Modal, Button } from 'react-bootstrap'
import { useIncidenceStore } from '../../store/incidenceStore';
import { formatDate } from '../../helpers/formatDate';
import { useLocation } from 'wouter';

const TableIncidents = () => {
  const [location, navigate] = useLocation()
  console.log(location)
  const [selectedIncident, setSelectedIncident] = useState(null);
  const incidents = useIncidenceStore(state => state.incidents)
  const getIncidents = useIncidenceStore(state => state.getIncidents)

  useEffect(() => {
    getIncidents()
  }, [])

  // Función para manejar el clic en el título de la incidencia
  const handleIncidentClick = (description: any) => {
    setSelectedIncident(description);
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setSelectedIncident(null);
  };
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 font-bold text-3xl">Lista de Incidencias</h2>
      <p className='text-blue-600 mb-1'>*Seleccione el título para ver la descripción de la incidencia</p>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Ubicación</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Estado</th>
            {location === '/admin/incidents' && (
              <th>Acciones</th>
            )}
          </tr>
        </thead>
        <tbody>
          {incidents.map(incidence => (
            <tr key={incidence.id}>
              <td>
                <span className="incident-title cursor-pointer" onClick={() => handleIncidentClick(incidence.description)}>{incidence.title}</span>
              </td>
              <td>{incidence.type}</td>
              <td>{incidence.location}</td>
              <td>{`${incidence.user?.name} ${incidence.user?.lastname}`}</td>
              <td>{formatDate(incidence.createdAt)}</td>
              <td>
                <Badge bg={`${incidence.status ? 'success' : 'danger'}`}>
                  {`${incidence.status ? 'Reparada' : 'Pendiente'}`}
                </Badge>
              </td>
              { location === '/admin/incidents' && (
                <td className='flex gap-3'>
                  <Badge
                    bg='primary'
                    className='cursor-pointer'
                    onClick={() => {
                      navigate(`/edit-incidence/${incidence.id}`)
                    }}
                  >Editar
                  </Badge>
                  <Badge
                    bg='danger'
                    className='cursor-pointer'
                  >Eliminar
                  </Badge>
                </td>
              ) }
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={selectedIncident!} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Descripción de la Incidencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedIncident}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default TableIncidents