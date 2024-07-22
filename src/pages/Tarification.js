import {React,useState} from 'react';

import Navbar from '../components/navbar';
import NavbarSecond from '../components/navbarSecond';
import Footer from '../components/footer';


function Tarification(){
    const [origine,setOrigine] = useState("");
    const [destination,setDestination] = useState("");
    const [typeCargaison,setTypeCargaison] = useState("");
    const [poids,setPoids] = useState("");
    const [service,setService] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        setOrigine(event.target['origine'].value);
        setDestination(event.target['destination'].value);
        setTypeCargaison(event.target['type'].value);
        setPoids(event.target['poids'].value);
        setService(event.target['service'].value);
    }
    
    return(
        <div className="tarification">
            <Navbar />
            <NavbarSecond />

        
        <div className="corps">
            <center><h5 style={{color:'navy', marginTop:'20px'}}>Tarifications</h5></center>
    
               
            <div className="formulaire">
            
                <h6>CHOISSISSEZ:</h6>
                <form onSubmit={handleSubmit}>
                    <label>Origine</label><br />
                    <select name="origine">
                        <option value="Ottawa">Ottawa</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Quebec">Quebec</option>
                    </select>
                    <br />
                    <br />
                    <label>Destination</label><br />
                    <select name="destination">
                        <option value="Ottawa">Ottawa</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Quebec">Quebec</option>
                    </select>
                    <br />
                    <br />
                    <label>Type de cargaison</label><br />
                    <select name="type">
                        <option value="Alimentaire">Alimentaire</option>
                        <option value="Matière dangereuses">Matière dangereuses</option>
                        <option value="Produit manufactures">Produit manufactures</option>
                    </select>
                    <br />
                    <br />
                    <label>Poids de la cargaison</label><br />
                    <select name="poids">
                        <option value="< 1 tonnes">&lt; 1 tonnes</option>
                        <option value="1-5 tonnes">1-5 tonnes</option>
                        <option value="> 5 tonnes">&gt; 5 tonnes</option>
                    </select>
                    <br />
                    <br />
                    <label>Services spécifiques</label><br />
                    <select name="service">
                        <option value="Suivie en temps réel">Suivie en temps réel</option>
                        <option value="Assurance">Assurance</option>
                        <option value="Service client">Service client</option>
                    </select>
                    <br />
                    <br />
                    <input type="submit" value="Rechercher" />
                </form>
            </div>
            
            
            <div className="resultats">
                <h6>RESULTATS: </h6>
                <label>Départ:</label>
                <input type="text" value={origine} readOnly />
                <br />
                <br />
                <label>Destination:</label>
                <input type="text" value={destination} readOnly />
                <br />
                <br />
                <label>Type de cargaison:</label>
                <input type="text" value={typeCargaison} readOnly />
                <br />
                <br />
                <label>Poids de la cargaison:</label>
                <input type="text" value={poids} readOnly />
                <br />
                <br />
                <label>Services Spécifiques:</label>
                <input type="text" value={service} readOnly />
                <br />
                <br />
                <h4>TOTAL:
                    {poids === "< 1 tonnes" && 1000 + "$"}
                    {poids === "1-5 tonnes" && 1350 + "$"}
                    {poids === "> 5 tonnes" && 1900 + "$"}
                </h4>
            </div>   
        </div>
        <br />
        <br />
        < Footer />
    </div>
    );
}


export default Tarification;