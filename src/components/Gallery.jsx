import React from 'react'

const Gallery = ({complete,galleryData}) => {
    complete ? console.log("gallery data",galleryData) : ""
  return (
    <div>
      {complete? (<Images galleryData={galleryData} />): (<h2>Loading...</h2>)}
    </div>
  )
}

const Images = ({galleryData}) =>{

    return (
        <div className="gallery">
           <div className='gallery-1'>
           <img src={galleryData[0]} alt="image" />
           <img src={galleryData[5]} alt="image" />
           <img src={galleryData[6]} alt="image" />


           </div>
           <div className='gallery-2'>
        <img src={galleryData[2]} alt="image" />
           <img src={galleryData[4]} alt="image" />



           </div>
           <div className='gallery-3'>
           <img src={galleryData[1]} alt="image" />
           <img src={galleryData[3]} alt="image" />
           </div>
        </div>
    )
}








export default Gallery
