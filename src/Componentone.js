import React, { Component } from 'react'
import Secondcomponent from './Secondcomponent';



export default class Componentone extends Component {
  render() {
    getData=(param)=>{
        console.log("param",param);
    }
    return (
      <div>
        hi{this.props.name}
        <Secondcomponent name={"vel"} getData={this.getData}/>
      </div>
    )
  } 
}
