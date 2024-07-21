import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Suivi from '../pages/Suivi';
import Tarification from '../pages/Tarification';
import Home from '../pages/home';
import Reservation from '../pages/reservation';
import Stepper from './stepper';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/suivi" element={<Suivi />} />
        <Route path="/reservation" element={<Stepper />} />
        <Route path="/reservation2" element={<Reservation />} />
        <Route path="/tarification" element={<Tarification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;