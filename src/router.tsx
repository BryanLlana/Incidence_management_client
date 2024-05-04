import { Route } from 'wouter'
import IncidentsView from './pages/IncidentsView'
import CreateIncidenceView from './pages/incidence/CreateIncidenceView'
import AdminView from './pages/admin/AdminView'
import EditIncidenceView from './pages/incidence/EditIncidenceView'

const Router = () => {
  return (
    <div>
      <Route path='/' component={IncidentsView} />
      <Route path='/create-incidence' component={CreateIncidenceView} />
      <Route path='/edit-incidence/:id' component={EditIncidenceView} />
      <Route path='/admin/incidents' component={AdminView} />
    </div>
  )
}

export default Router