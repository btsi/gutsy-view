import React from 'react';
import ReactDOM from 'react-dom';
import RenderPicture from './components/picView.js';
import TitleView from './components/titleView.js';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id || 0,
      title: '',
      category: '',
      description: '',
      price: ''
    }
  }

  getData() {
    axios.get('/databaseRetrievalOnLoad')
      .then((response) => {
        console.log('success client axios request', response)
        let trip = response.data
        this.setState({
          id: trip[this.state.id].id,
          title: trip[this.state.id].title,
          image_URL: trip[this.state.id].image_URL,
          category: trip[this.state.id].category,
          description: trip[this.state.id].description,
          price: trip[this.state.id].price
        })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.getData()
    }
  }

  render() {
    return (
      <div className='main' style={mainView}>
        <div style={midView}>
          <div style={picTitleView}>
            <RenderPicture url={this.state.image_URL}/> 
            <TitleView title={this.state.title} description={this.state.description} price={this.state.price}/>
          </div>
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
    border: '2.5px solid black',
    borderHeight: '5px',
    padding: '20px',
    align: 'center'
  }

ReactDOM.render(<App/>, document.getElementById('app'));

export default App