import React from 'react';
import{CSSTransition} from "react-transition-group";

import '../css/App.css';


class Projects extends React.Component{
  render(){
    return (
      <CSSTransition in={this.props.view} 
        timeout={{enter: 4000}}
        classNames="projects"
        unmountOnExit
        >
        <div className="Me-page-layout">
          <main>
            <p>
              These are my projects
            </p>
          </main>
        </div> 
      </CSSTransition>

    );
  }
}


export default Projects;