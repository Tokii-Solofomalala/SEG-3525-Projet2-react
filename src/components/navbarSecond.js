import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function NavbarSecond() {
  return (
    <Navbar className="navbar-container">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="/"style={{ color: 'navy' }}>BT Transport</Navbar.Brand>
            <Nav.Link href="/reservation">Reserver un transport</Nav.Link>
            <Nav.Link href="/tarification">Tarification</Nav.Link>
          </Nav>
          <Button className="button" href="/suivi">SUIVI</Button>
        </Container>
    </Navbar>
        
    );
}
export default NavbarSecond;