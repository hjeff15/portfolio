import React from "react";

import { CSSTransition } from "react-transition-group";

import Button from "./Button";
import Thanks from "./Thanks";

import twitter from "../assets/Twitter.png";
import github from "../assets/GitHub.png";
import linkedin from "../assets/Linkedin.png";

import emailjs from "emailjs-com";
import emailJsSettings from "../config";

class Contact extends React.Component {
  constructor(){
    super();
    this.messageMe = this.messageMe.bind(this);
  }
  state = {
    emailJsSettings,
    visible: false,
    buttonVisible: false,
    thanksVisible: false
  };

  buttonClassProp = "home-button";

  messageMe = (e) => {
    const serviceID = this.state.emailJsSettings["serviceID"];
    const contactForm = this.state.emailJsSettings["templateID"];
    const userID = this.state.emailJsSettings["userID"];
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    emailjs
      .sendForm(serviceID, contactForm, e.target, userID)
      .then(
        (result) => {
          this.setState({
            visible: false,
            buttonVisible: true,
            thanksVisible: true
          });
          setTimeout(() => {
            document.getElementById("contact-form").style.display = "none";
          }, 1000);
          window.scrollTo(0, 0);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  changePage = (e) => {
    const target = e.target.id;
    if (target === "home") {
      this.props.history.push(`/`);
    } else {
      console.log("You need a 404 page");
    }
  };

  componentDidMount() {
    this.setState({
      visible: true,
      buttonVisible: true
    });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='Contact-page-layout'>
        <h1 className='contact-header contact-type-writer param'>
          Get in touch...
        </h1>
        <CSSTransition
          in={this.state.visible}
          timeout={{ enter: 2000, exit: 1000 }}
          classNames='contact-socials'
          unmountOnExit
        >
          <div className='social-icons'>
            <a href='https://twitter.com/hjeff15' target='_blank' rel="noopener noreferrer">
              <img id='twitter' src={twitter} alt='twitter' />
            </a>
            <a href='https://github.com/hjeff15' target='_blank' rel="noopener noreferrer" >
              <img id='github' src={github} alt='github' />
            </a>
            <a
              href='https://www.linkedin.com/in/hugo-jeffreys-494b9b84/'
              target='_blank'
              rel="noopener noreferrer" 
              >
              <img id='linkedin' src={linkedin} alt='linkedin' />
            </a>
          </div>
        </CSSTransition>

        <form id="contact-form" className='contact-form' onSubmit={this.messageMe}>
          <CSSTransition
            in={this.state.visible}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames='submit-name'
            unmountOnExit
          >
            <div className='contact-name brackets'>
              <label htmlFor='name'>
                Name:
                <input
                  name='user_name'
                  type='text'
                  id='name'
                  required
                  placeholder='Your name ...'
                ></input>
              </label>
            </div>
          </CSSTransition>

          <CSSTransition
            in={this.state.visible}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames='submit-email'
            unmountOnExit
          >
            <div className='contact-email brackets'>
              <label htmlFor='email'>
                Email:
                <input
                  name='user_email'
                  type='email'
                  id='email'
                  required
                  placeholder='Your email ...'
                ></input>
              </label>
            </div>
          </CSSTransition>

          <CSSTransition
            in={this.state.visible}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames='submit-text'
            unmountOnExit
          >
            <textarea
              className='contact-msg'
              name='user_message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Type your message here...'
            ></textarea>
          </CSSTransition>

          <CSSTransition
            in={this.state.visible}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames='submit-button'
            unmountOnExit
          >
            <button id="submit-details" className='contact-button buttons function' type='submit'>
              submit
            </button>
          </CSSTransition>
        </form>
        <Thanks view={this.state.thanksVisible}/>
        <div className='back-button'>
          <Button
            view={this.state.buttonVisible}
            name='home'
            buttonClassProp={this.buttonClassProp}
            changePage={this.changePage}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
