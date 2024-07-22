
import NavbarSecond from '../components/navbarSecond';
import Navbar from '../components/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className='Home'>
          <Navbar />
          <NavbarSecond />

          <section id="home">
          <img src = "../Images/service-de-livraison-unique.png" alt="Description de l'image1n" style={{ width: '100%', height: 'auto' }} />
            
          </section>

          <section id="apropos">
            <Container>
                <div className='aproposSection'>
                <Row >
                    <Col > 
                    <h5 style={{ color: 'navy',fontFamily:'Times New Roman' }}>Qui nous sommes ?</h5>
                        <p style={{ fontFamily:'Times New Roman' }}>Bienvenue sur notre site ! Nous sommes fiers de vous présenter BT Transport, 
                          votre partenaire de confiance pour tous vos besoins en transport régional au Canada. Depuis notre création, 
                          nous nous engageons à offrir des services de transport rapides, fiables et sécurisés à travers les provinces canadiennes.
                          < br/>Notre mission est simple : fournir un service de transport régional de premier ordre en alliant efficacité, sécurité et service client exceptionnel. Nous nous efforçons de répondre aux besoins variés de 
                          nos clients en offrant des solutions de transport flexibles et adaptées à chaque situation.</p>
                    </Col>
                    <Col><img src='../Images/191206_UF_02-0419_v5-scaled-1.jpg' style={{width: '100%', height:'auto'}} alt="Description de l'image"></img></Col>
                </Row>
                </div>
            </Container>
          </section>
          <section id="informations">
          <Container>
            <div className='informationsSupp'>
            <Row>
                <Col xs={6} md={4} className="with-border"><p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}>01</p> <br />
                <p>Livraison rapide le lendemain dans les grands  centres urbains du Québec, del’Ontario et de la Côte-Est américaine.</p></Col>
                <Col xs={6} md={4} className="with-border"><p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}> 02 </p><br />
                <p>Suivi de commande en temps réel grâce à nos outils informatiques performants</p></Col>
                <Col xs={6} md={4} className="no-border"><p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}>03 </p> <br />
                <p>+99% de nos expéditions arrivent intactes à destination. Transport Bourassa, votre partenaire de confiance.</p></Col>
            </Row>
            <Row>
                <Col xs={6} md={4} className="no-border-buttom"><p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}>04</p> <br /> 
              <p>Logistique complète pour vos expéditions longue distance.</p></Col>
                <Col xs={6} md={4} className="no-border-buttom">
                <p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}>05 </p> <br /> 
                <p>Équipe qualifiée répondant aux normes élevées de qualité, incluant des chauffeurs spécialisés en transport de matières dangereuses</p></Col>
                <Col xs={6} md={4} ><p style={{ color: 'navy',fontFamily:'Times New Roman',fontSize:'30px'}}>06</p> <br /> 
                <p>Flotte de camions et remorques exemplaire, une référence dans l’industrie, représentant notre clientèle avec excellence.</p></Col>
            </Row>
            </div>
        </Container>
          </section>
          <Footer />
        </div>
       
      );
}
  export default Home;
