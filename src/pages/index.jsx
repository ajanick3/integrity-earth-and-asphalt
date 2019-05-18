import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Main from '../components/Main'
import Header from '../components/Header'

const HomeIndex = () => {
  const siteTitle = 'Integrity Earth and Asphalt'
  const siteDescription = 'Integrity Earth and Asphalt'

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name='description' content={siteDescription} />
      </Helmet>
      <Header />
      <Main />
    </>
  )
}

export default HomeIndex
