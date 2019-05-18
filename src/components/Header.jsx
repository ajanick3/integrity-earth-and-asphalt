import React from 'react'
import Footer from './Footer'
// import avatar from '../assets/images/avatar.jpg'

const servicesList = ['Excavating', 'Asphalt', 'Outdoors', 'Snow']

const Header = () => {
  return (
    <header id='header'>
      <div className='inner'>
        <a href='#' className='image avatar'>
          {/* <img src={avatar} alt='' /> */}
        </a>
        <h1>
          <ul style={{ listStyle: 'none' }}>
            {servicesList.map((service, i) => (
              <li key={`service-${i}`}>{service}</li>
            ))}
          </ul>
        </h1>
      </div>
      <Footer />
    </header>
  )
}

export default Header
