import React from 'react';
// import{CSSTransition} from "react-transition-group";

import Project from "./Project";
import myProjects from "../projectList";

import '../css/App.css';


class Projects extends React.Component{
  state = {
    myProjects,
    view: false
  };

  componentDidMount(){
    this.setState({
      visible: true
    })
  }

  render(){
    return (
        <div className="Projects-page-layout">
          <ul>
          {Object.keys(this.state.myProjects).map(key => 
          <Project key={key} details={this.state.myProjects[key]} view={this.state.view}/>)}
          </ul>
        </div> 
    );
  }
}


export default Projects;