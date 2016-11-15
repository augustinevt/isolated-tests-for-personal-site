import React from 'react';
import {render} from 'react-dom';
import Section from './section.jsx';

import Data from './data.js';
import data from './data.json';

const ddata = { foo: 'foo'};

class App extends React.Component {

  handleScroll(event) {
    let scrollTop = event.srcElement('scroll', this.handleScroll);
    console.log(scrollTop);
  }


  render() {
    console.log(data);
    return(
      <div>
        <p> Hello React! </p>

        <Section { ...data[0] }/>

      </div>
   )
  }
}

render(<App/>, document.getElementById('app'));
