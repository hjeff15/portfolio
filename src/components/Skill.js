import React from "react";
import { CSSTransition } from "react-transition-group";

class Skill extends React.Component{
    skillClassName = `single-skill single-skill-${this.props.details.name}`;
    skillId = `card-${this.props.details.id}`

    componentDidMount(){
        console.log("SKILL mounted")
    }
    render(){
        return (
            <CSSTransition
            in={this.props.view} 
            timeout={{enter: 1000, exit:1000}}
            classNames="skill-card"
            unmountOnExit
            >
                <li className={this.skillClassName} id={this.skillId}>
                    <img className="skill-image" id={this.props.details.id} src={this.props.details.image} alt={this.props.details.name}/>
                    <h2 className="skill-header function-name">{this.props.details.name.toUpperCase()}</h2>
                    <p className="skill-description">{this.props.details.description}</p>
                </li>
            </CSSTransition>
        )
    }
}

export default Skill;