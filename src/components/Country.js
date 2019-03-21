import React, { Component } from 'react';

class Country extends Component {

    render() {
        const{flag,name}=this.props
        return (
        <div className = "List-group-item list-group-item-action">{flag}{name}</div>
        )
    }
}
    
export default Country
  