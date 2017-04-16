import React, { Component } from 'react';
import {render} from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends Component {
  render () {
    return (
      <Slider />
    );
  }
}

render(<App/>, document.getElementById('app'));
