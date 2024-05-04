import { Route } from 'wouter'
import IncidentsView from './pages/IncidentsView'
import CreateIncidenceView from './pages/incidence/CreateIncidenceView'

const Router = () => {
  return (
    <div>
      <Route path='/' component={IncidentsView} />
      <Route path='/create-incidence' component={CreateIncidenceView} />
    </div>
  )
}

export default Router