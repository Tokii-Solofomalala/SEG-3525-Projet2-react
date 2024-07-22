import { useState } from 'react';
import Reservation from '../pages/reservation';
import MarchandiseReservation from '../pages/marchandiseReservation';
import ConfirmationReservation from '../pages/confirmationReservation';
import { useNavigate } from 'react-router-dom';
import NavbarSecond from '../components/navbarSecond';
import Navbar from '../components/navbar';


function Stepper(){
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        nom:"",
        prenom:"",
        email:"",
        depart:"",
        destination:"",
        type:"",
        poids:"",
        unitePoids:"",
        volume:"",
        uniteVolume:""
    });
    const steps = ["Informations personnels","Informations pour la Marchandise","Confirmation finale "];
    const PageDisplay = () => {
        if(page === 0 ){
          //console.log(formData);
            return <Reservation formData={formData} setFormData={setFormData}/>;
        }else if(page === 1){
            return <MarchandiseReservation formData={formData} setFormData={setFormData}/>
        
        }else {
            return <ConfirmationReservation formData={formData} setFormData={setFormData}/>
        }
    }
    return(
        <div className = 'Stepper'>
            <Navbar />
            <NavbarSecond />
            <div className="progressbar">
              <div
                style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
              ></div>
            </div>
            
            <div className='Body'>
                {PageDisplay()}
            </div>

            <div className='Bouton'>
            <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Previous
          </button>
          <div className='btn'>
          <button style = {{ background:'Navy', color:'White' }}
            onClick={() => {
              if (page === steps.length - 1) {
                alert("Votre réservation a été effectué.Merci de votre confiance.");
                navigate('/');
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          > 
          {page === steps.length - 1 ? "Submit" : "Suivant"}</button>
          </div>
          
            </div>
            
        </div>
  
    );
}
export default Stepper; 