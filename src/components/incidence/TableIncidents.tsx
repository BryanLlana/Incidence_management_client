import { useEffect, useState } from 'react';
import { Container, Table, Badge, Modal, Button } from 'react-bootstrap'
import { useIncidenceStore } from '../../store/incidenceStore';
import { formatDate } from '../../helpers/formatDate';
import { useLocation } from 'wouter';
import { deleteIncidenceService } from '../../services/incidence/deleteIncidence.service';
import { toast } from 'react-toastify';
import { updateStatusService } from '../../services/incidence/updateStatus.service';

const TableIncidents = () => {
  const [location, navigate] = useLocation()
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [imageName, setImageName] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
  const incidents = useIncidenceStore(state => state.incidents)
  const getIncidents = useIncidenceStore(state => state.getIncidents)
  const deleteIncidence = useIncidenceStore(state => state.deleteIncidence)
  const updateStatus = useIncidenceStore(status => status.updateStatus)

  useEffect(() => {
    getIncidents()
  }, [])

  // Función para manejar el clic en el título de la incidencia
  const handleIncidentClick = (description: any, imageName: any) => {
    setSelectedIncident(description);
    setImageName(imageName)
    console.log(`${BACKEND_URL}/image/incidence/${imageName}`)
  };

  // Función para cerrar el modal
  const handleClose = () => {
    setSelectedIncident(null);
  };

  const handleClick = async (id: string) => {
    if (confirm('¿Esta seguro de eliminar la incidencia?')) {
      deleteIncidence(id)
      toast.success("Incidencia eliminada correctamente")
      await deleteIncidenceService(id)
    }
  }

  const handleClickStatus = async (id: string) => {
    updateStatus(id)
    toast.success("Estado actualizado correctamente")
    await updateStatusService(id)
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 font-bold text-3xl">Lista de Incidencias</h2>
      <p className='text-blue-600 mb-1'>*Seleccione el título para ver la descripción de la incidencia</p>

      {incidents.length === 0 ? (
        <p className='text-center mt-3'>No hay incidencias</p>
      ) : (
        <>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Título</th>
                <th>Tipo</th>
                <th>Ubicación</th>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Estado</th>
                {
                  location === '/admin/incidents' && (
                    <th>Acciones</th>
                  )
                }
              </tr >
            </thead >

            <tbody>
              {incidents.map(incidence => (
                <tr key={incidence.id}>
                  <td>
                    <span className="incident-title cursor-pointer" onClick={() => handleIncidentClick(incidence.description, incidence.image)}>{incidence.title}</span>
                  </td>
                  <td>{incidence.type}</td>
                  <td>{incidence.location}</td>
                  <td>{`${incidence.user?.name} ${incidence.user?.lastname}`}</td>
                  <td>{formatDate(incidence.createdAt)}</td>
                  <td>
                    <Badge
                      onClick={() => handleClickStatus(incidence.id)}
                      bg={`${incidence.status ? 'success' : 'danger'}`}
                      className='cursor-pointer'
                    >
                      {`${incidence.status ? 'Reparada' : 'Pendiente'}`}
                    </Badge>
                  </td>
                  {location === '/admin/incidents' && (
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
                        onClick={() => handleClick(incidence.id)}
                      >Eliminar
                      </Badge>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table >

          <Modal show={selectedIncident!} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Descripción de la Incidencia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedIncident}</p>
              {imageName && (
                <div className="text-center">
                  <img src={`${BACKEND_URL}/image/incidence/${imageName}`} alt="Imagen de la incidencia" style={{ maxWidth: '100%' }} />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container >
  )
}

export default TableIncidents