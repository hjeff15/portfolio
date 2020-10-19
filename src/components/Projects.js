import React from 'react';
// import{CSSTransition} from "react-transition-group";

import Project from "./Project";
import Button from "./Button";
import myProjects from "../projectList";

import '../css/App.css';


class Projects extends React.Component{
  state = {
    myProjects,
    visible: false
  };

  constructor(){
    super();
    this.changePage = this.changePage.bind(this);
  }

  changePage(e){
    const target = e.target.id;
    this.setState({
      visible : false
    })
    setTimeout(() => {
      if(target === "me" || "skills" || "projects" || "contact"){
          this.props.history.push(`/${target}`);
      }else{
        (console.log("You need a 404 page"))
      }
    },1000)
  }

  buttonClassProp="project-button";

  componentDidMount(){
    this.setState({
      visible: true
    })
  }

  render(){
    return (
        <div className="Projects-page-layout">
          <ul className="project-list">
          {Object.keys(this.state.myProjects).map(key => 
          <Project key={key} details={this.state.myProjects[key]} view={this.state.visible}/>)}
          </ul>
          <div className="project-buttons">
            <Button name="me" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
            <Button name="skills" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
            <Button name="contact" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          </div>
        </div> 
    );
  }
}


export default Projects;