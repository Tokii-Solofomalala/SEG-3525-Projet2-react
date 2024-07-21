import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom';
import NavbarSecond from '../components/navbarSecond';
import Navbar from '../components/navbar';

function Suivi(){
    const [events,setEvents] = useState([]);
    
        const eventStyleGetter = (event, start, end, isSelected) => {
            const style = {
            backgroundColor: event.color, // Utiliser la couleur définie pour cet événement
            borderRadius: '5px',
            opacity: 0.8,
            color: 'white',
            border: 'none',
            display: 'block',
            };
            return {
            style: style
            };
        };
        const localizer = momentLocalizer(moment);
        function rechercher(e){
            e.preventDefault();
            
            const idReservation = e.target.elements.idReservation.value;
            if(idReservation === '123456'){
                setEvents( [
                    {
                      title: 'Chargement',
                      start: moment().startOf('week').add(2, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début de la semaine actuelle + 1 jour
                      end: moment().startOf('week').add(2, 'day').add(8, 'hours').set({ hour: 5, minute: 0 }).toDate(), // Durée de 2 heures
                      color: '#E55672', 
                    },
                    {
                        title: 'En route',
                        start: moment().startOf('week').add(4, 'day').set({ hour: 1, minute: 0 }).toDate(), // Début de la semaine actuelle + 3 jours
                        end: moment().startOf('week').add(4, 'day').add(7, 'hour').set({ hour: 5, minute: 0 }).toDate(), // Durée d'1 heure
                        color: '#787173',
                      },
                      {
                        title: 'Arrivée',
                        start: moment().startOf('week').add(7, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(7, 'day').set({ hour: 8, minute: 0 }).toDate(),
                        color: '#BF2F10',
                    },
                  ]);
            }
            else if(idReservation === '789101'){
                setEvents([
                    {
                        title: 'Chargement',
                        start: moment().startOf('week').add(1, 'day').set({ hour: 5, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(1, 'day').set({ hour:6 , minute: 0 }).toDate(),
                        color: '#E55672',
                    },
                    {
                        title: 'En route',
                        start: moment().startOf('week').add(3, 'day').set({ hour: 1, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(3, 'day').set({ hour: 12, minute: 0 }).toDate(),
                        color: '#787173', 
                    },
                    {
                        title: 'Arrivée',
                        start: moment().startOf('week').add(6, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(6, 'day').set({ hour: 8, minute: 0 }).toDate(),
                        color: '#BF2F10',
                    },
                ]);
            }
            if(idReservation === '111213'){
                setEvents( [
                    {
                      title: 'Chargement',
                      start: moment().startOf('week').add(2, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début de la semaine actuelle + 1 jour
                      end: moment().startOf('week').add(2, 'day').add(8, 'hours').set({ hour: 5, minute: 0 }).toDate(), // Durée de 2 heures
                      color: '#E55672', 
                    },
                    {
                        title: 'En route',
                        start: moment().startOf('week').add(4, 'day').set({ hour: 1, minute: 0 }).toDate(), // Début de la semaine actuelle + 3 jours
                        end: moment().startOf('week').add(4, 'day').add(7, 'hour').set({ hour: 5, minute: 0 }).toDate(), // Durée d'1 heure
                        color: '#787173',
                      },
                      {
                        title: 'Arrivée',
                        start: moment().startOf('week').add(7, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(7, 'day').set({ hour: 8, minute: 0 }).toDate(),
                        color: '#BF2F10',
                    },
                  ]);
            }
            else if(idReservation === '141516'){
                setEvents([
                    {
                        title: 'Chargement',
                        start: moment().startOf('week').add(1, 'day').set({ hour: 5, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(1, 'day').set({ hour:6 , minute: 0 }).toDate(),
                        color: '#E55672',
                    },
                    {
                        title: 'En route',
                        start: moment().startOf('week').add(3, 'day').set({ hour: 1, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(3, 'day').set({ hour: 12, minute: 0 }).toDate(),
                        color: '#787173', 
                    },
                    {
                        title: 'Arrivée',
                        start: moment().startOf('week').add(6, 'day').set({ hour: 7, minute: 0 }).toDate(), // Début à 12AM (00:00)
                        end: moment().startOf('week').add(6, 'day').set({ hour: 8, minute: 0 }).toDate(),
                        color: '#BF2F10',
                    },
                ]);
            }
            else{
                setEvents([]);
            }
        }
        return (
            <div style={{ height: '500px' }}>
            <Navbar />
            <NavbarSecond />
            <center><h5 style={{color:'navy'}}>Suivi de votre livraison</h5></center>
            {/*<Link to="/tarification">Tarification</Link>*/}
            <form method="post" onSubmit={rechercher}>
                <label>Entrer votre id de réservation:</label>
                <input type="text" name="idReservation"></input>
                <input type="submit" value="Voir"/>
            </form>
            <Calendar
                localizer={localizer}
                events={events}
                views={['week']} // Afficher seulement la vue semaine
                defaultView="week" // Vue par défaut
                defaultDate={moment().startOf('week').toDate()} // Date de début de la semaine actuelle
                startAccessor="start"
                endAccessor="end"
                style={{ margin: '50px' }}
                eventPropGetter={eventStyleGetter} // Utiliser eventPropGetter pour définir les styles d'événement (optionnel)
            />
            </div>
          );
}
export default Suivi;