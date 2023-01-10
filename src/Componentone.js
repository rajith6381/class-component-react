import React, { Component } from 'react'
import Secondcomponent from './Secondcomponent';



export default class Componentone extends Component {

  getData=(param)=>{
    console.log("param",param);
}
constructor(){
  super();
  this.state={
    name:"rajith",
    id:45
  }
  console.log("constructor");
}

componentDidMount(){
  console.log("componentdidmount");
}
componentDidUpdate(){
  console.log("componentdidupdate");
}
  render() {
    
   
    return (
      <div>
        hi{this.props.name}
        <Secondcomponent name={"vel"} getData={this.getData}/>
      </div>
    )
  } 
}
