import React from 'react';

import{CSSTransition} from "react-transition-group";

class Menu extends React.Component{
    state = {
        display: true,
    }

    constructor(){
        super();
        this.changePage = this.changePage.bind(this);
    }

    changePage(e){
        const target = e.target.id;
        if(target === "me" || "skills" || "projects" || "contact"){
            this.props.history.push(`/${target}`);
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
                            <span className="function">function </span> 
                            <span className="function-name omit">front-end-</span>
                            <span className="function-name">developer</span>
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
                {/* <Me view={this.state.displayMe} changePage={this.changePage}/> */}
                {/* <Projects view={this.state.displayProjects}/> */}
                {/* <Skills view={this.state.displaySkills}/>  */}
            </div>
        
        
        );
    }
}

export default Menu

