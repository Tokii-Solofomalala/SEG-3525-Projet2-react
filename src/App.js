import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import NavbarSecond from './components/navbarSecond';
import Home from './pages/home';
import Footer from './components/footer';

import './index.css';
import Reservation from './pages/reservation';
import MarchandiseReservation from './pages/marchandiseReservation';
import Stepper from './components/stepper';
import Routers from './components/Routers';
function App() {
  return (
    <div className="App">
      {/*<Home />
      <Footer />*/}
      <Routers/>
    </div>
  );
}
  export default App;

