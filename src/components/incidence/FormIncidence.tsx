import { Form } from 'react-bootstrap'
import { typesOfIncidents } from '../../data/typesOfIncident'
import { useEffect, useState } from 'react'
import { IncidenceForm, User } from '../../types'
import { getUsersService } from '../../services/user/get.service'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import MessageError from '../ui/MessageError'

type Props = {
  register: UseFormRegister<IncidenceForm>,
  errors: FieldErrors<IncidenceForm>
}

const FormIncidence = ({ register, errors }: Props) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const usersApi = await getUsersService()
      setUsers(usersApi)
    }

    getUsers()
  }, [])

  return (
    <>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Título</Form.Label>
        <Form.Control
          {...register('title', {
            required: 'El título es obligatorio'
          })} 
          type="text" 
          placeholder="Ingrese el título de la incidencia" 
        />
        { errors.title && <MessageError>{errors.title.message}</MessageError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>Tipo de Incidencia</Form.Label>
        <Form.Select 
          {...register('type', {
            required: 'El tipo de incidencia es obligatorio'
          })}
          defaultValue=""
        >
          <option value="" disabled>--Seleccionar tipo de incidencia--</option>
          { typesOfIncidents.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </Form.Select>
        { errors.type && <MessageError>{errors.type.message}</MessageError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Ubicación</Form.Label>
        <Form.Control
          {...register('location', {
            required: 'La ubicación es obligatoria'
          })}
          type="text"
          placeholder="Ingrese la ubicación de la incidencia"
        />
        { errors.location && <MessageError>{errors.location.message}</MessageError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          { ...register('description', {
            required: 'La descripción es obligatoria'
          })}
          as="textarea"
          rows={4}
          placeholder="Ingrese una descripción detallada de la incidencia"
        />
        { errors.description && <MessageError>{errors.description.message}</MessageError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>Usuario</Form.Label>
        <Form.Select
          {...register('userId', {
            validate: value => value > 0 || 'El usuario es obligatorio'
          })}
          defaultValue={0}
        >
          <option value={0} disabled>--Seleccionar un usuario--</option>
          { users.map(user => (
            <option key={user.id} value={user.id}>{`${user.name} ${user.lastname}`}</option>
          ))}
        </Form.Select>
        { errors.userId && <MessageError>{errors.userId.message}</MessageError>}
      </Form.Group>
    </>
  )
}

export default FormIncidence