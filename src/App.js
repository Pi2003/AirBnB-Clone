import './App.css';
import React, { Component } from 'react'
import Navbar from './utility/NavBar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleFullVenue from './pages/SingleFullVenue/SingleFullVenue';
import Modal from './utility/Modal/Modal';
import CityVenues from './pages/CityVenues/CityVenues';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Navbar />
              <Modal/>
              <Home />
            </React.Fragment>} />
          <Route path="*" element={<><h1>Error: URL not found</h1></>}/>
          <Route path="/venue/:vid" element={<><Navbar/><SingleFullVenue/></>}/>
          <Route path="/city/:cityName" element={<><Navbar/><CityVenues/></>}/>
          <Route path='/payment-success/:stripeToken' element={<><PaymentSuccess/></>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
