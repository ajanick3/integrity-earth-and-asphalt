import React from 'react'

const First = ({siteName
  ,missionStatement}) => {

  return (
    <div>
      <section id='one'>
        <header className='major'>
          <h2>{siteName}</h2>
        </header>
        <p>{missionStatement}</p>
        {/* <ul className='actions'>
          <li>
            <a href='#' className='button'>
              Learn More
            </a>
          </li>
        </ul> */}
      </section>
    </div>
  )
}

export default First
