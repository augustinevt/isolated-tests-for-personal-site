import React from 'react';
import {render} from 'react-dom';
import Section from './section.jsx';
import Skill from './skill.jsx';
import DynaComp from './dyna-comp.jsx';


import dataOne from './dataOne.json';
import dataTwo from './dataTwo.json';


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
    return(
      <div>

        <DynaComp/>

      </div>
   )
  }
}

render(<App/>, document.getElementById('app'));
