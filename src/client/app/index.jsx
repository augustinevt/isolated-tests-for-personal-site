import React from 'react';
import {render} from 'react-dom';
import Section from './section.jsx';

import Data from './data.js';
import data from './data.json';

const ddata = { foo: 'foo'};

class App extends React.Component {

  handleScroll(event) {
    const scrollables = document.getElementsByClassName('scroll');

    [].forEach.call(scrollables, function(el){
      let offset = el.getBoundingClientRect();
      el.style.opacity = offset.top / 1999;
      console.log(offset.top);

    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }


  render() {
    console.log(data);
    return(
      <div>
        <p> Hello React! </p>

        <Section onScroll={this.handlScroll} { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>
        <Section { ...data[0] }/>

      </div>
   )
  }
}

render(<App/>, document.getElementById('app'));
