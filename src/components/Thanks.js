import React from "react";

import { CSSTransition } from "react-transition-group";

class Thanks extends React.Component{
    render(){
        return (
            <CSSTransition
                in={this.props.view}
                timeout={{ enter: 1000, exit: 1000 }}
                classNames='thanks'
                unmountOnExit
                >
                <div className="thanks-container">
                    <h2 className="envelope"><span role="img" aria-label="envelope">📨</span></h2>
                    <h1 className="thanks-text function">Thanks for the message!</h1>
                    <h2 className="jiffy function-name">I'll get back to you in a jiffy!</h2>
                </div>
            </CSSTransition>
        )
    }
}

export default Thanks;