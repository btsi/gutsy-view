import React from 'react'
import data from '../../database/mockData'

const TitleView = (props) => {
  return (
    <div>
      <div style={titleView}>
        <h2>{data.events[0].title}</h2>
        <h4>Description:</h4>
        <p>{data.events[0].description}</p>
          <div style={textSize}>
            Price: ${data.events[0].price}
          </div> 
        <div>
      </div>
      </div>
      <div style={{marginLeft: '5px'}}>
        <ul>
          <li>Tickets sent via email</li>
          <li>Returns and exchanges accepted</li>
          <li>Exceptions may apply.</li>
        </ul>
      </div>
    </div>
  )
}

const titleView = {
  marginLeft: '10px',
  width: '600px',
  height: '300px',
  border: '1px solid black',
  padding: '10px'
}
const textSize = {
  fontSize: '25px'
}

export default TitleView
