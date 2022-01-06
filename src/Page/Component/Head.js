import React,{useState} from 'react'
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap'
import { useAuth } from '../../Handler/LoginHandler'
import Brand from '../../Img/brandMbl.png'
import { useHistory } from 'react-router';
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
<Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">
            <img
                alt=""
                src={Brand}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}MBL</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href='/adddata' >Add New Location</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={handleLogout} >Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Head
