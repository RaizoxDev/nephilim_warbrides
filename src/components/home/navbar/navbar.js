import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Accueil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Installer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Windows(32Bits)</NavDropdown.Item>
              <NavDropdown.Item href="#">Windows(64Bits)</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">MacOS(32Bits)</NavDropdown.Item>
              <NavDropdown.Item href="#">MacOS(64Bits)</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#histoire">Histoire</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#forum">Forum</Nav.Link>
            <NavDropdown title="Support" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Discord</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Autre Contacts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar1;