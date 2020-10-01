import React from 'react';

import Menu from "./Menu";


class Homepage extends React.Component{

  render(){
    return (
        <Menu history={this.props.history}/>
    );
  } 
}
export default Homepage