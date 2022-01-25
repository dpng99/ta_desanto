import React,{useState} from 'react'
import {Container, Navbar, NavDropdown, Nav, Offcanvas} from 'react-bootstrap'
import { useAuth } from '../../Handler/LoginHandler'
import Brand from '../../Img/brandMbl.png'
import { useHistory } from 'react-router';
import{AiOutlineHistory} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
const Head = () => {
  const[error, setError]= useState();
  const{currentUser, logout} = useAuth();
  const history = useHistory();
 async function handleLogout(){
      setError('');

      try {
          await logout();
          history.push('/login')
      } catch  {
          setError('logout failed');
      }
  }
    return (
<Navbar bg="success" expand={false}>
  <Container fluid className='d-flex align-items-between'>
    <Navbar.Brand href="/">
            <img
                alt=""
                src={Brand}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}Dashboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" className='bg-white' />
    <Navbar.Offcanvas 
    id='offcanvasNavbar'
    aria-labelledby="offcanvasNavbarLabel"
    placement='end'
    >
      <Offcanvas.Header closeButton>
      <h1>Menu</h1>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <Nav >
        <Nav.Link href='/adddata' className='text-black'><GoLocation/> Add New Location</Nav.Link>
        <Nav.Link href='/datatable' className='text-black'><AiOutlineHistory/> History</Nav.Link>
          <NavDropdown.Divider />
        <Nav.Link  onClick={handleLogout} className='text-black'>Logout</Nav.Link>
      </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}

export default Head
