import React from "react";

import { CSSTransition } from 'react-transition-group';

class Button extends React.Component {
    state = {
        view: false
    }

    componentDidMount(){
        console.log(this.state.view);
        setTimeout ( () => {
            this.setState({
                view: true
            })
        },1000)
    }

    render(){

        return(
            <CSSTransition in={this.state.view} timeout={{enter: 1000, exit: 1000}} classNames={this.props.buttonClassProp} unmountOnExit>
                <button className="buttons function" id={this.props.name} onClick={this.props.changePage}>
                    {this.props.name}
                </button> 
            </CSSTransition> 
        )
    }
}

export default Button;