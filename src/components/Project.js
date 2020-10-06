import React from "react";
import{CSSTransition} from "react-transition-group";

import myProjects from "../projectList";

class Project extends React.Component{
    state = {
        myProjects,
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
            unmountOnExit>
                <div className="project-card">
                    <video controls autoPlay loop className="project-videos" id={this.props.details.id}>
                        <source src={this.props.details.video} />
                    </video>
                    <h2 className="project-header" >{this.props.details.name}</h2>
                    <p className="project-description" >{this.props.details.description}</p>
                </div>
            </CSSTransition>
        )
    }
}

export default Project;