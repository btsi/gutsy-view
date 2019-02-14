import React from 'react'
// import data from '../../database/mockData'

const RenderPicture = (props) => {
  return (
    <div style={picView}>
    <img src={props.url} style={imageStyle}></img>
    </div>
  )
}

const picView = {
  width: '600px',
  height: '450px',
  border: '2px solid black',
  // padding: '10px'
}
const imageStyle = {
  width: '600px',
  height: '450px'
}

export default RenderPicture
