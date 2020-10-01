import React from 'react';

import { CSSTransition } from 'react-transition-group';

import hugo from "../assets/me.jpeg";
// import '../css/Me.css';


class Me extends React.Component{

  render(){

    return (
      <div className="Me-page-layout">
        <CSSTransition in={this.props.view} timeout={{enter: 1000}} classNames="me-left" unmountOnExit>
          <div>
            <main className="me-text">
              <p className="me-type">
                Hi! I’m Hugo and I’m a front end developer. I’m interested in making web applications which are great fun to use! I’m always working on something and I try to upload all the code to my GitHub account. See the details below if you’re interested.
              </p>
            </main>
          </div>  
        </CSSTransition>
        <CSSTransition in={this.props.view} timeout={{enter: 1000}} classNames="me-right" unmountOnExit>
          <div className="me-photo" >
            <img id="hugo" src={hugo} alt="This is me"/>
          </div>
        </CSSTransition>
        <CSSTransition in={this.props.view} timeout={{enter: 1000}} classNames="me-bottom" unmountOnExit>
          <div className="me-button">
            <button className="buttons">{'{'}Projects{'}'}</button>
            <button className="buttons">{'{'}Skills{'}'}</button>
          </div>
        </CSSTransition>
      </div>  
    );
  }
}


export default Me;