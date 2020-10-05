import React from 'react';
import{CSSTransition} from "react-transition-group";

import '../css/App.css';


class Projects extends React.Component{
  state = {
    visible: false
  }

  componentDidMount(){
    this.setState({
      visible: true
    })
  }

  render(){
    return (
      <CSSTransition in={this.state.visible} 
        timeout={{enter: 1000}}
        classNames="projects"
        unmountOnExit
        >
        <div className="Projects-page-layout">
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