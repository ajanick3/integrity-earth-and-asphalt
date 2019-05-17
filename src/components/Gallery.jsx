import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-images'

const Gallery = (props) => {
  const { images } = props

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index, event) => {
    event.preventDefault()
    setCurrentImage(index)
    setLightboxIsOpen(true)
  }
  const closeLightbox = () => {
    setCurrentImage(0)
    setLightboxIsOpen(false)
  }
  const gotoPrevious = () => {
    setCurrentImage((prevState) => prevState - 1)
  }
  const gotoNext = () => {
    setCurrentImage((prevState) => prevState + 1)
  }
  const handleClickImage = () => {
    if (currentImage === images.length - 1) {
      return
    }
    gotoNext()
  }
  const gotoImage = (index) => {
    setCurrentImage(index)
  }
  return (
    <div>
      <div className='row'>
        {images.map((obj, i) => {
          return (
            <article className='6u 12u$(xsmall) work-item' key={i}>
              <a
                className='image fit thumb'
                href={obj.src}
                onClick={(e) => openLightbox(i, e)}
              >
                <img src={obj.thumbnail} />
              </a>

              <h3>{obj.caption}</h3>
              <p>{obj.description}</p>
            </article>
          )
        })}
      </div>
      <Lightbox
        currentImage={currentImage}
        images={images}
        isOpen={lightboxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
      />
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
