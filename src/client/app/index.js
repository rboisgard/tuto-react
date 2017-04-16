import React, { Component } from 'react';
import {render} from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = { sliderValue: 0 };
  }

  render () {
    return (
      <div>
        <Slider onChange={(value) => this.setState({ sliderValue: value })} />
        <p>Current Value : {this.state.sliderValue}</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
