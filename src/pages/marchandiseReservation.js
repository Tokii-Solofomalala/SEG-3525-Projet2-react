
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from '../components/navbar';
import * as formik from 'formik';
import * as yup from 'yup';
function MarchandiseReservation({formData , setFormData }) {
    const { Formik } = formik;

  const schema = yup.object().shape({
    depart: yup.string().required(),
    arriver: yup.string().required(),
    cargaison: yup.string().required(),
    poids: yup.number().required(),
    volume: yup.string().required(),
  });
    return (
        
    <div className=" MarchandiseReservation">
    
    <div className='BodyMarchandise'>
    <center> <h5 style={{ color: 'navy' }}>Informations de Marchandise</h5> </center>
    <Form.Label>Depart</Form.Label>
    <Form.Select aria-label="Lieu de depart" name="depart" value={formData.depart} onChange={(event) => setFormData({...formData,depart:event.target.value })}>
      <option>Votre lieu Depart</option>
      <option value="Ottawa">Ottawa</option>
      <option value="Toronto">Toronto</option>
      <option value="Quebec">Quebec</option>
      <option value="Montreal">Montreal</option>
    </Form.Select>
    <br />
    <Form.Label>Arriver</Form.Label>
    <Form.Select aria-label="Lieu d'arriver" name="destination" value={formData.destination} onChange={(event) => setFormData({...formData,destination:event.target.value })}>
      <option>Votre lieu d'arriver</option>
      <option value="Ottawa">Ottawa</option>
      <option value="Toronto">Toronto</option>
      <option value="Quebec">Quebec</option>
      <option value="Montreal">Montreal</option>
    </Form.Select>
    <br />
    <Form.Label>Type de Cargaison</Form.Label>
    <Form.Select aria-label="Type de cargaison" name="type" value={formData.type} onChange={(event) => setFormData({...formData,type:event.target.value })}>
      <option>Type de cargaison</option>
      <option value="Alimentaire">Alimentaire</option>
      <option value="Meubles">Meubles</option>
      <option value="Produits manufactures">Produits manufactures</option>
      <option value="Matieres dangeureuses">Matieres dangeureuses</option>
    </Form.Select>
    <br />
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Poids</Form.Label>
          <Form.Control  name="poids" value={formData.poids} onChange={(event) => setFormData({...formData,poids:event.target.value })}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="t" name="unitePoids" value={formData.unitePoids} onChange={(event) => setFormData({...formData,unitePoids:event.target.value })}>
            <option>t</option>
            <option>kg</option>
          </Form.Select>
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity" >
          <Form.Label>Volume</Form.Label>
          <Form.Control name="volume" value={formData.volume} onChange={(event) => setFormData({...formData,volume:event.target.value })}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="m^3" name="uniteVolume" value={formData.uniteVolume} onChange={(event) => setFormData({...formData,uniteVolume:event.target.value })}>
            <option>m^3</option>
            <option>l</option>
          </Form.Select>
        </Form.Group>
    </Row>
    </div>
    
    {/*<Button variant="primary" type="submit">
        Reserver
      </Button>*/}
    </div>

    );
}
export default MarchandiseReservation;