import React from "react";

import { CSSTransition } from "react-transition-group";

import Button from "./Button";

import twitter from "../assets/Twitter.png";
import github from "../assets/GitHub.png";
import linkedin from "../assets/Linkedin.png";

import emailjs from "emailjs-com";

// emailjs.init("user_ajk4YlUQa2dS6KxG5UfgG");

class Contact extends React.Component {
  state = {
    visible: false,
  };
  buttonClassProp = "home-button";

  messageMe = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact_form", e.target, "user_ajk4YlUQa2dS6KxG5UfgG")
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for contacting me!");
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
    });
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

        <form className='contact-form' onSubmit={this.messageMe}>
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
            <button className='contact-button buttons function' type='submit'>
              submit
            </button>
          </CSSTransition>
        </form>
        <div className='back-button'>
          <Button
            view={this.state.visible}
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
