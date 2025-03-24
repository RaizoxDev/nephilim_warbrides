import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const downloadLinks = [
  { label: "Windows (32Bits)", url: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l" },
  { label: "Windows (64Bits)", url: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l" },
  { label: "MacOS (32Bits)", url: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l" },
  { label: "MacOS (64Bits)", url: "https://youtu.be/dQw4w9WgXcQ?si=QvC-KbhBiu0CIV7l" },
];

function Menu() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            
            <NavDropdown title="Installer" id="install-dropdown">
              {downloadLinks.map(({ label, url }, index) => (
                <NavDropdown.Item key={index} href={url}>{label}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/installer/prérequis">Prérequis</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/forum">Forum</Nav.Link>

            <NavDropdown title="Support" id="support-dropdown">
              <NavDropdown.Item href="https://discord.gg/Zq99VtyT5x">Discord</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/support">Autre Contacts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;