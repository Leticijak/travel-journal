import React from "react"
import { ImLocation2 } from "react-icons/im"

const Card = ({
  imageUrl,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  title,
  description,
}) => {
  return (
    <div className='card-wrap'>
      <img src={imageUrl} width='300px' alt='' />
      <div className='info'>
        <div className='titles'>
          <h4>
            <ImLocation2 color='red' /> {location}
          </h4>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <h4>
          {startDate} - {endDate}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
