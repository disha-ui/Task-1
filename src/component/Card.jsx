import React from 'react'

function Card(props) {
  return (
    <div className='box'>
      <img id='img-1' src={props.img}/>
      <div className='card-txt'>
        <h2>{props.heading}</h2>
        <p id='p1'>{props.txt}</p>
      </div>
      <div className='icons'>
      <i class="fa-solid fa-list-check"></i>
      <p id='p2'>Ghost</p>
      </div>
      <div>
        <p id='p3'>{props.p3}</p>
      </div>
    </div>
  )
}

export default Card
