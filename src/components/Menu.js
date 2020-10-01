import React from 'react';

import Me from "./Me";
import Skills from "./Skills";
import Projects from "./Projects";

import{CSSTransition} from "react-transition-group"

import '../css/App.css';

class Menu extends React.Component{
    state = {
        display: true,
        displayMe: false,
        displayProjects: false,
        displaySkills:false
    }

    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(e){
        // const display = {...this.state.display};
        const target = e.target.id;
        const targetToString = target[0].toUpperCase()+target.slice(1);
        const stateId = "display"+targetToString;

        if(target === "me"){
            console.log(stateId);
            this.setState({display: false});
            setTimeout( () => {
                this.setState({ 
                    displayMe: true
                })
            }, 1000);
            // this.props.history.push(`/me`);
        }else if(e.target.id === "skills"){
            this.props.history.push(`/skills`); 
        }else if(e.target.id === "projects"){
            this.props.history.push(`/projects`);
        }else if(e.target.id === "contact"){
            this.props.history.push(`/contact`);
        }else{
          (console.log("You need a 404 page"))
        }
    }
    render(){
        return(
                <div className="Homepage-page-layout">
                    <CSSTransition 
                        in={this.state.display}
                        timeout={{exit: 1000}}
                        classNames="menu"
                        unmountOnExit
                        >
                        <header className="App-header">
                            <h1 className="type-writer">
                                <span className="function">function</span> 
                                <span className="function-name"> front-end-developer</span>
                                <span className="brackets">(</span>
                                <span className="param">hugo</span>
                                <span className="brackets">)</span>
                                <span>{'{'}</span>
                            </h1>
                            <div className="my-self">
                                <p className="about-me">
                                <span className="param">hugo</span>
                                <span>.</span>  
                                <span className="brackets">aboutMe</span>
                                <span> = </span>
                                <span className="branch" id="me" onClick={this.changePage}>me</span>
                                <span>;</span>
                                </p>
                                <p className="my-skills">
                                <span className="param">hugo</span>
                                <span>.</span>  
                                <span className="brackets">skills</span>
                                <span> = </span>
                                <span className="branch" id="skills" onClick={this.changePage}>skills</span>
                                <span>;</span>
                                </p>
                                <p className="my-projects">
                                <span className="param">hugo</span>
                                <span>.</span>  
                                <span className="brackets">projects</span>
                                <span> = </span>
                                <span className="branch" id="projects" onClick={this.changePage}>projects</span>
                                <span>;</span>
                                </p>
                                <p className="my-contact">
                                <span className="this">this</span>
                                <span>.</span>  
                                <span>contact</span>
                                <span> = </span>
                                <span className="function-name branch" id="contact" onClick={this.changePage}>contactMe()</span>
                                <span>;</span>
                                </p>
                                <p className="func-bracket">
                                <span>{'};'}</span>
                                </p>
                            </div> 
                        </header>
                    </CSSTransition>
                    <Me view={this.state.displayMe}/>
                    <Projects view={this.state.displayProjects}/>
                    <Skills view={this.state.displaySkills}/>
                    
                </div>
            
            
        );
    }
}

export default Menu

