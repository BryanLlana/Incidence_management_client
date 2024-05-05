import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap'
import { useIncidenceStore } from '../../store/incidenceStore';

const Filter = () => {
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const incidents = useIncidenceStore(state => state.incidentsCopy)
  const filterIncidents = useIncidenceStore(state => state.filterIncidents)
  const resetFilter = useIncidenceStore(state => state.resetFilter)

  const handleFilterDateChange = (e: any) => {
    setFilterDate(e.target.value);
  };

  const handleFilterStatusChange = (e: any) => {
    setFilterStatus(e.target.value);
  };

  useEffect(() => {
    if (incidents.length > 0) {
      if (filterDate === '' && filterStatus === '') {
        resetFilter()
      } else {
        filterIncidents(filterDate, filterStatus)
      }
    }
  }, [filterDate, filterStatus])
  return (
    <Container className="mb-3">
      <Form.Group className="mb-3 me-3 d-inline-block">
        <Form.Label>Filtrar por Fecha</Form.Label>
        <Form.Control type="date" value={filterDate} onChange={handleFilterDateChange} />
      </Form.Group>
      <Form.Group className="mb-3 d-inline-block">
        <Form.Label>Filtrar por Estado</Form.Label>
        <Form.Select value={filterStatus} onChange={handleFilterStatusChange}>
          <option value="">Todos</option>
          <option value="false">Pendiente</option>
          <option value="true">Reparada</option>
        </Form.Select>
      </Form.Group>
    </Container>
  )
}

export default Filter