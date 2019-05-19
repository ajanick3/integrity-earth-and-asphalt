import React from 'react'
import First from './sections/First'
import Second from './sections/Second'
import Contact from './sections/Contact'

const address = (
  <div>Rapid City, Michigan</div>
)
// const addressLink = 'https://www.google.com/maps/place/5323+Wilhelm+Rd+NW,+Rapid+City,+MI+49676/@44.8229323,-85.2813128,17z/data=!3m1!4b1!4m5!3m4!1s0x881fddfb8eeb6bb9:0x93c297fda06340af!8m2!3d44.8229323!4d-85.2791241'
const phone = '231-499-6598'
const email = 'integrityearthandasphalt@gmail.com'
const emailSubject = 'Integrity%20Earth%20and%20Asphalt'

const Main = (props) => {
  return (
    <div id='main'>
      <First
        siteName={'Integrity Earth & Asphalt'}
        missionStatement={
          'Specializing in Excavation, Asphalt, and Outdoor Services. Our goal is to develop relationships and build trust through our character and hard work'
        }
      />
      <hr />
      {/* <Second sectionTitle={''} sectionDescription={''} /> */}
      {/* <hr /> */}
      <Contact
        sectionTitle={'Get In Touch'}
        sectionDescription={
          'Contact us if you have any questions about our services'
        }
        address={address}
        // addressLink={addressLink}
        phone={phone}
        email={email}
        emailSubject={emailSubject}
      />
    </div>
  )
}

export default Main
