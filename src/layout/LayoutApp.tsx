import { ReactNode } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'wouter'

const LayoutApp = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar className='bg-[#003249]' expand="lg">
        <Container>
          <Navbar.Brand className='text-white'>
            <Link href='/admin/incidents'>Gestión de Incidencias</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
              <Link href="/" className='text-white'>Incidencias</Link>
              <Link href="/admin/incidents" className='text-white'>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      { children }
    </>
  )
}

export default LayoutApp