import { useEffect, useState } from 'react';
import { Container, Table, Badge, Modal, Button } from 'react-bootstrap'
import { useIncedenceStore } from '../../store/incidenceStore';

const TableIncidents = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const incidents = useIncedenceStore(state => state.incidents)
  const getIncidents = useIncedenceStore(state => state.getIncidents)

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
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Ubicación</th>
            <th>Usuario</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map(incidence => (
            <tr>
              <td>
                <span className="incident-title" onClick={() => handleIncidentClick(incidence.description)}>{incidence.title}</span>
              </td>
              <td>{incidence.type}</td>
              <td>{incidence.location}</td>
              <td>{`${incidence.user?.name} ${incidence.user?.lastname}`}</td>
              <td>
                <Badge bg={`${incidence.status ? 'success' : 'danger'}`}>
                  {`${incidence.status ? 'Reparada' : 'Pendiente'}`}
                </Badge>
              </td>
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