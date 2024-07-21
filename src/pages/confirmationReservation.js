
function ConfirmationReservation({formData , setFormData}) {
    return (
      <div className="ConfirmationReservation">
        
       <center><h5 style={{ color: 'navy', marginTop:'20px' }}>Confirmation de Reservation</h5></center>
       <center><p style={{fontSize:'15px', marginTop:'20px' }}> Veuillez vérifier les détails ci-dessous pour confirmer que 
        toutes les informations sont correctes. < br/>Assurez-vous de conserver cette confirmation, 
        car vous en aurez besoin pour suivre votre livraison et pour tout futur suivi</p></center>
       <div className="inside">
       <strong> Votre id de reservation: 
        {formData.type === "Alimentaire" && "123456"}
        {formData.type === "Meubles" && "789101"}
        {formData.type === "Produits manufactures" && "111213"}
        {formData.type === "Matieres dangeureuses" && "141516"}
       </strong>
       <br/>
        Nom: {formData.nom}
        <br/>
        Prenom: {formData.prenom}
        <br/>
        Email: {formData.email}
        <br/>

        Départ: {formData.depart}
        <br/>
        Destination: {formData.destination}
        <br/>
        Type de cargaison: {formData.type}
        <br/>
        Poids: {formData.poids} {formData.unitePoids}
        <br/>
        Volume: {formData.volume} {formData.uniteVolume}
        <br/>
        </div>
      </div>
    );
  }
  
  export default ConfirmationReservation;
  