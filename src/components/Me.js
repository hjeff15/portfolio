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

  buttonClassProp = "me-bottom";

  componentDidMount(){
    this.setState({
      visible : true
    })
  }

  componentWillUnmount(){
    console.log("Me is is unmounting");
  }

  render(){

    return (
      <div className="Me-page-layout">
        <CSSTransition in={this.state.visible} timeout={{enter: 1000, exit:1000}} classNames="me-left" unmountOnExit>
          <div>
            <main className="me-text">
              <p className="me-type">
                Hi! I’m Hugo and I’m a front end developer. I’m interested in making web applications which are great fun to use! I’m always working on something and I try to upload all the code to my GitHub account. See the details below if you’re interested.
              </p>
            </main>
          </div>  
        </CSSTransition>
        <CSSTransition in={this.state.visible} timeout={{enter: 1000, exit: 1000}} classNames="me-right" unmountOnExit>
          <div className="me-photo" >
            <img id="hugo" src={hugo} alt="This is me"/>
          </div>
        </CSSTransition>
        <div className="buttons">
          <Button name="projects" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          <Button name="skills" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          <Button name="contact" view={this.state.visible} changePage={this.changePage} buttonClassProp={this.buttonClassProp}/>
          </div>
      </div>  
    );
  }
}


export default Me;