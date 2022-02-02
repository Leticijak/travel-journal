import React from "react"
import { ImLocation2 } from "react-icons/im"

const Card = (props) => {
  console.log(props)
  return (
    <div className='card-wrap'>
      <img src={props.imageUrl} width='300px' alt='' />
      <div className='info'>
        <div className='titles'>
          <h4>
            <ImLocation2 color='red' /> {props.location}
          </h4>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
