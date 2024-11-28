import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-primary w-100">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            Book Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="nav-link text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link text-light">
                About
              </Nav.Link>
              <Nav.Link href="#" className="nav-link text-light">
                Browser
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
