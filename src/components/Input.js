import React from "react";

class Input extends React.Component{
    render(){
        return (
            <div>
                <label htmlFor={this.props.name}>
                    {this.props.text}
                    <input 
                        type={this.props.type} 
                        id={this.props.name} 
                        defaultValue={this.props.name}
                        >
                    </input>
                </label>
            </div>
        )
    }
}

export default Input;