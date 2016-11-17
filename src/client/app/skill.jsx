import React from 'react';

export default class Skill extends React.Component {

  constructor(props) {
    super(props);
  }

  handleScroll(){
    const el = document.getElementsByClassName('skill')[0];
    let offset = el.getBoundingClientRect().top
    let increment = Math.floor(offset % 10);
    let somethingElse = Math.floor(Math.floor(offset / 10));
    console.log("inc", increment);
    console.log("SE", somethingElse);
    if (increment === 0) {
      let array = [];
      let foo = 'foo';
      for (var i = 0; i < somethingElse; i++) {
        //console.log(string.concat(foo));
        array.push('foo');
      }
      console.log(array.join(' '));
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return <div className="skill"> This is skill </div> ;
  }

}
