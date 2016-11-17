import React from 'react';
import {render} from 'react-dom';
import Section from './section.jsx';
import Skill from './skill.jsx';

import Data from './data.js';
import data from './data.json';

const ddata = { foo: 'foo'};

class App extends React.Component {

  handleScroll(event) {
    const scrollables = document.getElementsByClassName('scroll');

    [].forEach.call(scrollables, function(el){
      let offset = el.getBoundingClientRect();
      el.style.opacity = offset.top / 1999;
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

        <Section { ...data[0] }/>


        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />

      </div>
   )
  }
}

render(<App/>, document.getElementById('app'));
