
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className="footer">
    <Container>
   
      <div className='down'>
        <div className="up">
      <Row>
        <Col sm={4}>
            <h6>Contactez nous <br />
                des maintenant </h6></Col>
        <Col sm={8} >
        <ul className='ListHorizantal'>
            <li>Principale  <br /> 343 789 2345</li>
            <li>Montreal  <br />514 657 4738</li>
            <li>Sans frais <br /> 800 456 8900</li>   
        </ul>
        </Col>
      </Row>
      </div>
        <h5>BT Transport</h5>
        <p>155, Rue Notre Dame Sud Montreal, QC H3Y6B0</p>
      </div>
    
      </Container>
     
      </div>
    );
}
    export default Footer;