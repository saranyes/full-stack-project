import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';

import Flights from './Pages/Flights/Flights.jsx';
import Bus from './Pages/Bus.jsx'
import Stay from './Pages/Stay.jsx'
import Train from './Pages/Train.jsx'
import Visa from './Pages/Visa.jsx'
import Cab from './Pages/Cab.jsx'
import CE from './Pages/CurrencyExchange.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Cab" element={<Cab />} />
        <Route path="/CE" element={<CE />} />
        <Route path="/Bus" element={<Bus />} />
        <Route path="/Stay" element={<Stay />} />
        <Route path="/Train" element={<Train />} />
        <Route path="/Visa" element={<Visa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
