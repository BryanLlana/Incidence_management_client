import { Route } from 'wouter'
import IncidentsView from './pages/IncidentsView'
import CreateIncidenceView from './pages/incidence/CreateIncidenceView'
import AdminView from './pages/admin/AdminView'

const Router = () => {
  return (
    <div>
      <Route path='/' component={IncidentsView} />
      <Route path='/create-incidence' component={CreateIncidenceView} />
      <Route path='/admin/incidents' component={AdminView} />
    </div>
  )
}

export default Router