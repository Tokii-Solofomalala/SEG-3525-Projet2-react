import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
    return ( 
        <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" style={{color:'white'}}>Accueil</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-1" style={{color:'white'}}>Apropos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="link-2" style={{color:'white'}}>Contact</Nav.Link>
        </Nav.Item>
     
      </Nav>
    );
}
    export default Navbar;
    