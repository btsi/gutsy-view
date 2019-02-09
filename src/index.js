import React from 'react';
import ReactDOM from 'react-dom';
import RenderPicture from './components/picView.js';
import TitleView from './components/titleView.js'
import data from '../database/mockData'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0
    }
  }
  
  render() {
    return (
      <div className='main' style={mainView}>
        <div style={midView}>
          <div style={picTitleView}>
            <RenderPicture/> <TitleView/>
          </div>
          <button id="book" style={button}>Book Now</button>
        </div>
      </div>
    )
  }
}

const midView = {
  margin: 'auto',
}
  const picTitleView = {
    display: 'flex',
    flexDirection: 'row'
  }
  const mainView = {
    // margin: 'auto',
    // width: '75%',
    border: '2.5px solid black',
    borderHeight: '5px',
    padding: '20px',
    align: 'center'
  }
  const button = {
    margin: '10px',
    backgroundColor: '#2d2a26',
    borderColor: 'white',
    borderRadius: '5px',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 5,
    width: '400px',
    outline: 'none',
    cursor: 'pointer'
  }
  

ReactDOM.render(<App/>, document.getElementById('app'));

export default App