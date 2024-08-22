import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.freepik.com/free-vector/red-heart-paw-print-outline_78370-2364.jpg?size=626&ext=jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            PetAdoption
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;