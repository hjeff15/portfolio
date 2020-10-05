import React from 'react';
// import { CSSTransition } from 'react-transition-group';
import Skill from "./Skill";
import Button from "./Button";

import mySkills from "../skillsList";


class Skills extends React.Component{
  state = {
    mySkills,
    view: false
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

  buttonProp="skills-button";

  componentDidMount(){
    this.setState({
      view:true
    })
  }

  render(){
    return (
      <div className="Skills-page-layout">
        <ul className="skills">
          {Object.keys(this.state.mySkills).map(key => 
          <Skill key={key} details={this.state.mySkills[key]} view={this.state.view}/>)}
        </ul>
        <div className="skills-buttons">
          {/* Buttons not yet passed their prop , like in the ME component/page */}
          <Button name="projects" view={this.state.view} changePage={this.changePage} buttonProp={this.buttonProp}/>
          <Button name="skills" view={this.state.view} changePage={this.changePage} buttonProp={this.buttonProp}/>
          <Button name="contact" view={this.state.view} changePage={this.changePage} buttonProp={this.buttonProp}/>
        </div>

      </div> 
    );
  }
}


export default Skills;