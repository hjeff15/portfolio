import React from 'react';

import { CSSTransition } from 'react-transition-group';

import Button from "./Button"

import hugo from "../assets/me.jpeg";


class Me extends React.Component{
  state = {
    visible: false
  }

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

  buttonClassProp = "me-button";

  componentDidMount(){
    this.setState({
      visible : true
    })
  }

  render(){

    return (
      <div className="Me-page-layout">
        <CSSTransition in={this.state.visible} timeout={{enter: 1000, exit:1000}} classNames="me-left" unmountOnExit>
          <div className="me-text-and-type">
            <main className="me-text">
              <p className="me-type">
              Hi! I’m Hugo and I’m a front end developer. I love designing and developing great web applications which are fun to use! If you want a responsive website built for an optimal user experience that can achieve your business goals, you’re in the right place! 
              </p>
            </main>
          </div>  
        </CSSTransition>
        <CSSTransition in={this.state.visible} timeout={{enter: 1000, exit: 1000}} classNames="me-right" unmountOnExit>
          <div className="me-photo" >
            <img id="hugo" src={hugo} alt="This is me"/>
          </div>
        </CSSTransition>
        <div className="me-page-buttons buttons">
          <Button name="projects" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          <Button name="skills" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          <Button name="contact" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          </div>
      </div>  
    );
  }
}


export default Me;