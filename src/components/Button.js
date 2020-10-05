import React from "react";

import { CSSTransition } from 'react-transition-group';

class Button extends React.Component {
    constructor(){
        super();
        this.myFunction = this.myFunction.bind(this);
    }

    myFunction(e){
        console.log(e.target.id);
    }

    render(){

        return(
            <CSSTransition in={this.props.view} timeout={{enter: 1000, exit: 1000}} classNames={this.props.buttonProp} unmountOnExit>
                <button className="buttons function" id={this.props.name} onClick={this.props.changePage}>
                    {this.props.name}
                </button> 
            </CSSTransition> 
        )
    }
}

export default Button;