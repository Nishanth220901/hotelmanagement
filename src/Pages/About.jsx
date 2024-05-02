import React from 'react'
import AboutHotel from '../Components/AbouttheHotel/AboutHotel'
import HotelServices from '../Components/HotelServices/HotelServices'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function About() {
  return (
    <div>
        <Navbar/>
        <AboutHotel/>
        <HotelServices/>
        <Footer/>
    </div>
  )
}

export default About