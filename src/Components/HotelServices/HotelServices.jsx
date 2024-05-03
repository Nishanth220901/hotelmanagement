import React from 'react'
import Card from 'react-bootstrap/Card';
import flight from '../../assets/flight.png'

function HotelServices() {
  return (
    <div>
      <div className='Services row'>
        <div className='col'>

          <h1>LUXURY HOTEL</h1>
          <h5>Best Services</h5>
          <p>Coimbatore, renowned as "The Manchester of South India," boasts H-Residency as an iconic landmark nestled in Saravanampatti. Positioned conveniently near Chil SEZ IT Park, KCT Tech Park, and a myriad of tech giants like Bosch, Cognizant, NTT Data, and Amazon, alongside numerous colleges in the vicinity, it serves as an ideal retreat for both business and leisure travelers seeking tranquility coupled with top-notch hospitality. With 40 meticulously maintained rooms spanning across categories of Executive, Deluxe, and Premium, Holiday Residency ensures a memorable stay. Its strategic proximity to Coimbatore International Airport, Peelamedu, further enhances its allure. Additionally, guests can venture out to explore the myriad attractions dotting its surroundings, promising an enriching experience.</p>
        </div>
   

      <div className='col'>
        <div className='row'>
          <div className='col'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/6c1643_a42fa6ded8514ba298ee940c9e1186a3~mv2.jpg/v1/fill/w_281,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1%20(2).jpg" />
          <Card.Body>
            <Card.Title>ROOM CLEANING</Card.Title>
          </Card.Body>
        </Card>

          </div>
          <div className='col'>
        <Card style={{ width: '18rem' }} >
          <Card.Img variant="top" src={flight} />
          <Card.Body>
            <Card.Title>Airport Pick Up & Drop</Card.Title>
          </Card.Body>
        </Card>

          </div>
        </div>

      </div>
      </div>

    </div>
  )
}

export default HotelServices