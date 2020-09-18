import React from 'react';
import {withRouter} from 'react-router';
import hugo from "../assets/me.jpeg";
import '../css/App.css';


class Me extends React.Component{
  render(){
    return (
      <div className="Me-page-layout">
        <main className="me-text">
          <p className="me-type-writer">
            Hi! I’m Hugo and I’m a front end developer. I’m interested in making web applications which are great fun to use! I’m always working on something and I try to upload all the code to my GitHub account. See the details below if you’re interested.
          </p>
        </main>
        <div className="me-photo" id="hugo">
          <img src={hugo} alt="This is me"/>
        </div>
      </div>      
       
    );
  }
}


export default withRouter(Me);