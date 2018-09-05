import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '7e3f9e91ce8441d9be5618a6bae5d997'
});

const particlesOptions = {
  particles:{
   number:{
     value: 30,
     density:{
       enable: true,
       value_area: 800
     }
   }
 }
}

 class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
      imageUrl: '',
      box: {},


    }
  }

  calculateFaceLocation= (data) =>{

  }
  onInputChange=(event) =>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit= () =>{
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
    function(response) {
       this.calculateFaceLocation(response);
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (<div className="App">
      <Particles className='particles'
       params={particlesOptions}/>
    <div className= 'center'>
      <Navigation/>

    </div>
      <Logo/>
      <Rank/>
      <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>);
  }
}

export default App;
