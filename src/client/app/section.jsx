import React from 'react';

// import Remarkable from 'remarkable';
//
// const md = new Remarkable();

class Section extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {


    return (
      <div className="scroll">
        <h2>{this.props.title}</h2>
        <a href={this.props.link}>
          <img style={{width: 100 + "px"}} src={this.props.photo} alt="picture of project" />
        </a>
        {this.props.mainText}
        <br/>
        <img style={{width: 300 + "px"}} src={this.props.codeSample} alt="picture of project" />

      </div>
    )
  }
}

module.exports = Section;
