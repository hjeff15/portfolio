import React from 'react';
import '../css/App.css';

class Homepage extends React.Component{
  constructor(){
    super();
    this.changePage = this.changePage.bind(this);
  }

  changePage(e){
    console.log(e.target.id);
    if(e.target.id === "me-word"){
      this.props.history.push(`/me`);
    }else if(e.target.id === "me-skills"){
      this.props.history.push(`/skills`);
    }else if(e.target.id === "me-projects"){
      this.props.history.push(`/projects`);
    }else if(e.target.id === "me-skills"){
      this.props.history.push(`/skills`);
    }else if(e.target.id === "me-contact"){
      this.props.history.push(`/contact`);
    }else{
      (console.log("You need a 404 page"))
    }
  }

  componentDidMount(){
    console.log("mounted!");
    console.log(this);
  }
    
  render(){
    return (
      <div className="Homepage-page-layout">
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
              <span className="branch" id="me-word" onClick={this.changePage}>me</span>
              <span>;</span>
            </p>
            <p className="my-skills">
              <span className="param">hugo</span>
              <span>.</span>  
              <span className="brackets">skills</span>
              <span> = </span>
              <span className="branch" id="me-skills" onClick={this.changePage}>skills</span>
              <span>;</span>
            </p>
            <p className="my-projects">
              <span className="param">hugo</span>
              <span>.</span>  
              <span className="brackets">projects</span>
              <span> = </span>
              <span className="branch" id="me-projects" onClick={this.changePage}>projects</span>
              <span>;</span>
            </p>
            <p className="my-contact">
              <span className="this">this</span>
              <span>.</span>  
              <span>contact</span>
              <span> = </span>
              <span className="function-name branch" id="me-contact" onClick={this.changePage}>contactMe()</span>
              <span>;</span>
            </p>
            <p className="func-bracket">
              <span>{'};'}</span>
            </p>
          </div> 
        </header>
      </div>
    );
  } 
}
export default Homepage