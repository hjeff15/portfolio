import React from "react";
import{CSSTransition} from "react-transition-group";

import myProjects from "../projectList";

class Project extends React.Component{
    state = {
        myProjects,
        visible: false
    }

    projectCardId = `project-card-${this.props.details.id}`

    componentDidMount(){
        this.setState({
            visible: true
        })
    }

    render(){
        return (
            <CSSTransition in={this.props.view} 
            timeout={{enter: 1000, exit: 1000}}
            classNames="projects"
            unmountOnExit>
                <div className="project-card" id={this.projectCardId}>
                    <video controls autoPlay loop className="project-videos" id={this.props.details.id}>
                        <source src={this.props.details.video} />
                    </video>
                    <h2 className="project-header function-name" >{this.props.details.name}</h2>
                    <p className="project-description" >{this.props.details.description}</p>
                </div>
            </CSSTransition>
        )
    }
}

export default Project;