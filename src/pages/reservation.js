
import Form from 'react-bootstrap/Form';
import Navbar from '../components/navbar';

function Reservation({formData , setFormData }) {
  return (
    <div className="Reservation">
    <div className="body">
    <center><h5 style={{color:'navy'}}>Informations personnelles</h5></center>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupNom">
        <Form.Label>Nom   </Form.Label>
        <Form.Control placeholder="Entrer votre nom" value={formData.nom} onChange={(event) => setFormData({...formData,nom:event.target.value })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPrenom">
        <Form.Label>Prenom</Form.Label>
        <Form.Control placeholder="Votre Prenom" value={formData.prenom} onChange={(event) => setFormData({...formData,prenom:event.target.value })}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Votre Email" value={formData.email} onChange={(event) => setFormData({...formData,email:event.target.value })}/>
      </Form.Group>
    </Form>
    </div>
    
   
    </div>
  );
}

export default Reservation;

