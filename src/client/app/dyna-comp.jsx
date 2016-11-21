import React from 'react';

import dataTwo from './dataTwo.json';

export default class DynaComp extends React.Component {
  constructor(props){
    super(props);
  }

  getContent() {

    console.log(dataTwo[0].projects);

    const projects = dataTwo[0].projects;

    const newArr = projects.map((project) => {
      return (<div key={project.title}>
        <h1>{project.title}</h1>
        <div>
          {project.summary}
        </div>
        <img src={project.img} alt="picture" />
      </div>);
    });

    console.log(newArr);

    return newArr;
  };

  render() {
    const jsx = this.getContent();

    console.log(jsx);
    return <div>
      <div>food</div>
      {jsx}
    </div>
  }
}
